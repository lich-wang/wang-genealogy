---
schema: wang-person/v1
id: p_yxMiqhZhiEEmDRjCALcVBW
status: active
merged_into: null
display_name: 王熙文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5i16AjyFveTSETgV8q8zM2
        subject_person_id: p_yxMiqhZhiEEmDRjCALcVBW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dudEWE6jvQxG6CbTqhRTka
          claim_id: c_5i16AjyFveTSETgV8q8zM2
          source_id: s_m7RLrKBZ9jNnyYFn3iuJA8
          stance: supports
          locator: CBDB:693686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693686）
          source: &a1
            id: s_m7RLrKBZ9jNnyYFn3iuJA8
            source_type: api_record
            title: 中国历代人物传记资料库：王熙文（CBDB 693686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693686&o=json
            external_identifier: CBDB:693686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U19X51t6a9WPYDsEWjvnMc
        subject_person_id: p_yxMiqhZhiEEmDRjCALcVBW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙文，清人物。籍贯吳縣，曾任通判。（中国历代人物传记资料库 CBDB 693686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mdmLk6Abk4m4TIaAHRqPOY
          claim_id: c_U19X51t6a9WPYDsEWjvnMc
          source_id: s_m7RLrKBZ9jNnyYFn3iuJA8
          stance: supports
          locator: CBDB:693686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cZXiKEEJQbkaysEzuP9SDd
        subject_person_id: p_yxMiqhZhiEEmDRjCALcVBW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2L23vgTSzx7Z2QYCVTW5Cd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E471CU9stKDTv9D1i-cREv
          claim_id: c_cZXiKEEJQbkaysEzuP9SDd
          source_id: s_m7RLrKBZ9jNnyYFn3iuJA8
          stance: supports
          locator: 蘇州府志，lgid=169754：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2L23vgTSzx7Z2QYCVTW5Cd
        status: active
        display_name: 王仁福
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熙文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙文 | accepted |
| bio.summary | 王熙文，清人物。籍贯吳縣，曾任通判。（中国历代人物传记资料库 CBDB 693686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2L23vgTSzx7Z2QYCVTW5Cd | 王仁福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熙文（CBDB 693686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693686&o=json)
