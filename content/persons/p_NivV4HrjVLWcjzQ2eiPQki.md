---
schema: wang-person/v1
id: p_NivV4HrjVLWcjzQ2eiPQki
status: active
merged_into: null
display_name: 王永泗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3wepszM5B9pcGP8QDrFTqb
        subject_person_id: p_NivV4HrjVLWcjzQ2eiPQki
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永泗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dk6mXdJvTzJ9FLhaeiaWAo
          claim_id: c_3wepszM5B9pcGP8QDrFTqb
          source_id: s_7E7VisUjtKBr6LuBeDq7gD
          stance: supports
          locator: CBDB:638987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638987）
          source: &a1
            id: s_7E7VisUjtKBr6LuBeDq7gD
            source_type: api_record
            title: 中国历代人物传记资料库：王永泗（CBDB 638987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638987&o=json
            external_identifier: CBDB:638987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YE7zLu36BfjJhkBEjTAqVs
        subject_person_id: p_NivV4HrjVLWcjzQ2eiPQki
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王永泗，清人物。籍贯山東省，入仕科舉制舉: 武舉科，曾任把總、千總。（中国历代人物传记资料库 CBDB 638987）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NJA5t3-zG9gAwa4-sX9AIL
          claim_id: c_YE7zLu36BfjJhkBEjTAqVs
          source_id: s_7E7VisUjtKBr6LuBeDq7gD
          stance: supports
          locator: CBDB:638987
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

# 王永泗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永泗 | accepted |
| bio.summary | 王永泗，清人物。籍贯山東省，入仕科舉制舉: 武舉科，曾任把總、千總。（中国历代人物传记资料库 CBDB 638987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永泗（CBDB 638987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638987&o=json)
