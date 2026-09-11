---
schema: wang-person/v1
id: p_7c2oS7pZT3FrRukLCuh7qZ
status: active
merged_into: null
display_name: 王言者
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LUFfFfKYB5igSpsDRLZ5D9
        subject_person_id: p_7c2oS7pZT3FrRukLCuh7qZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言者
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t3ATvaYMWAcDY47QSZTDU1
          claim_id: c_LUFfFfKYB5igSpsDRLZ5D9
          source_id: s_jaeAiSnUfr1PfpeFzjsnUd
          stance: supports
          locator: CBDB:683904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683904）
          source: &a1
            id: s_jaeAiSnUfr1PfpeFzjsnUd
            source_type: api_record
            title: 中国历代人物传记资料库：王言者（CBDB 683904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683904&o=json
            external_identifier: CBDB:683904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dRGS8C9U4un2YLhJ9BBbi6
        subject_person_id: p_7c2oS7pZT3FrRukLCuh7qZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王言者，明人物。籍贯仙居，身份为隱居不仕，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 683904）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47Pu3alr3Rx-l_bo-GEwgh
          claim_id: c_dRGS8C9U4un2YLhJ9BBbi6
          source_id: s_jaeAiSnUfr1PfpeFzjsnUd
          stance: supports
          locator: CBDB:683904
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

# 王言者

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言者 | accepted |
| bio.summary | 王言者，明人物。籍贯仙居，身份为隱居不仕，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 683904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言者（CBDB 683904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683904&o=json)
