---
schema: wang-person/v1
id: p_HWUNeW4cRL5XiTPFv2i7qL
status: active
merged_into: null
display_name: 王子明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2DRmswQpC9UPmUjbFeJ15F
        subject_person_id: p_HWUNeW4cRL5XiTPFv2i7qL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nf4qCBtdsLtwLEPMp9eEpL
          claim_id: c_2DRmswQpC9UPmUjbFeJ15F
          source_id: s_SGpwhjQ7SFyDAwFxLcTDLE
          stance: supports
          locator: CBDB:69053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69053）
          source: &a1
            id: s_SGpwhjQ7SFyDAwFxLcTDLE
            source_type: api_record
            title: 中国历代人物传记资料库：王子明（CBDB 69053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69053&o=json
            external_identifier: CBDB:69053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwJ8zhKpCRGdeMWjfAnHCA
        subject_person_id: p_HWUNeW4cRL5XiTPFv2i7qL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王子明，清人物。籍贯通渭，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69053）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_od9aFT5ZUiXn3ErbuICl60
          claim_id: c_LwJ8zhKpCRGdeMWjfAnHCA
          source_id: s_SGpwhjQ7SFyDAwFxLcTDLE
          stance: supports
          locator: CBDB:69053
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

# 王子明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子明 | accepted |
| bio.summary | 王子明，清人物。籍贯通渭，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 69053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子明（CBDB 69053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69053&o=json)
