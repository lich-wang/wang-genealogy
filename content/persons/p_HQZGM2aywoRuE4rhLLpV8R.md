---
schema: wang-person/v1
id: p_HQZGM2aywoRuE4rhLLpV8R
status: active
merged_into: null
display_name: 王開元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPb949GeAG4pfo37gk4Q6g
        subject_person_id: p_HQZGM2aywoRuE4rhLLpV8R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bSAKorQiHJPBXszSq7A5kG
          claim_id: c_TPb949GeAG4pfo37gk4Q6g
          source_id: s_CMFFhfh4kvYyNenuk8Jz2h
          stance: supports
          locator: CBDB:640746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640746）
          source: &a1
            id: s_CMFFhfh4kvYyNenuk8Jz2h
            source_type: api_record
            title: 中国历代人物传记资料库：王開元（CBDB 640746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640746&o=json
            external_identifier: CBDB:640746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WzGp7Zws2gh5A65UAe2kCd
        subject_person_id: p_HQZGM2aywoRuE4rhLLpV8R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王開元，清人物。籍贯東川府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640746）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5oIQhz3wExJo8tdOJYAixn
          claim_id: c_WzGp7Zws2gh5A65UAe2kCd
          source_id: s_CMFFhfh4kvYyNenuk8Jz2h
          stance: supports
          locator: CBDB:640746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王開元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開元 | accepted |
| bio.summary | 王開元，清人物。籍贯東川府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開元（CBDB 640746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640746&o=json)
