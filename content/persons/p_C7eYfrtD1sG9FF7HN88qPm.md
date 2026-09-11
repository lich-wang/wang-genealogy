---
schema: wang-person/v1
id: p_C7eYfrtD1sG9FF7HN88qPm
status: active
merged_into: null
display_name: 王子真
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_as9iQP8GqPeR4DAWMtuNRQ
        subject_person_id: p_C7eYfrtD1sG9FF7HN88qPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mG2oeXeMjrU3hL4JQy48KH
          claim_id: c_as9iQP8GqPeR4DAWMtuNRQ
          source_id: s_y5FDuDfz8uDi72hRpwp643
          stance: supports
          locator: CBDB:157163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157163）
          source: &a1
            id: s_y5FDuDfz8uDi72hRpwp643
            source_type: api_record
            title: 中国历代人物传记资料库：王子真（CBDB 157163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157163&o=json
            external_identifier: CBDB:157163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eMFZbFazB3B2FscJGE3Q1r
        subject_person_id: p_C7eYfrtD1sG9FF7HN88qPm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子真，唐人物。籍贯長安，曾任錄事參軍。（中国历代人物传记资料库 CBDB 157163）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VF56wqCKP_NZ14giR-AeqN
          claim_id: c_eMFZbFazB3B2FscJGE3Q1r
          source_id: s_y5FDuDfz8uDi72hRpwp643
          stance: supports
          locator: CBDB:157163
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wM8b1m_1isSsa5MmR4Hhdc
        subject_person_id: p_C7eYfrtD1sG9FF7HN88qPm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uJfXrem9G3wEMVyHTkQFNq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zEaD165AyyVslqVQuam35G
          claim_id: c_wM8b1m_1isSsa5MmR4Hhdc
          source_id: s_y5FDuDfz8uDi72hRpwp643
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uJfXrem9G3wEMVyHTkQFNq
        status: active
        display_name: 王怡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子真 | accepted |
| bio.summary | 王子真，唐人物。籍贯長安，曾任錄事參軍。（中国历代人物传记资料库 CBDB 157163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uJfXrem9G3wEMVyHTkQFNq | 王怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子真（CBDB 157163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157163&o=json)
