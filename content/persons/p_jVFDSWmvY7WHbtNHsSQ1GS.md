---
schema: wang-person/v1
id: p_jVFDSWmvY7WHbtNHsSQ1GS
status: active
merged_into: null
display_name: 王建瓴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQhi7SihaB7xZouteiFPsg
        subject_person_id: p_jVFDSWmvY7WHbtNHsSQ1GS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建瓴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1gF6iTpBWNBZfkBhBis9g
          claim_id: c_EQhi7SihaB7xZouteiFPsg
          source_id: s_5HVoxNmJeCCqTN7MDxJ1xK
          stance: supports
          locator: CBDB:637597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637597）
          source: &a1
            id: s_5HVoxNmJeCCqTN7MDxJ1xK
            source_type: api_record
            title: 中国历代人物传记资料库：王建瓴（CBDB 637597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637597&o=json
            external_identifier: CBDB:637597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JU7B4YWViHfk3eFx2FkJqx
        subject_person_id: p_jVFDSWmvY7WHbtNHsSQ1GS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建瓴，清人物。籍贯西安，入仕鄉貢舉人，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 637597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xXW0xvYItT448kH_O3gppW
          claim_id: c_JU7B4YWViHfk3eFx2FkJqx
          source_id: s_5HVoxNmJeCCqTN7MDxJ1xK
          stance: supports
          locator: CBDB:637597
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

# 王建瓴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建瓴 | accepted |
| bio.summary | 王建瓴，清人物。籍贯西安，入仕鄉貢舉人，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 637597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建瓴（CBDB 637597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637597&o=json)
