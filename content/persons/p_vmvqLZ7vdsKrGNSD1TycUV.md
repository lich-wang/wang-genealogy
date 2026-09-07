---
schema: wang-person/v1
id: p_vmvqLZ7vdsKrGNSD1TycUV
status: active
merged_into: null
display_name: 王镕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jaAYoZCKANgj77nLkx3rq7
        subject_person_id: p_vmvqLZ7vdsKrGNSD1TycUV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镕（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175475 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cHsCtdCRWXnyWAL5E83KKf
          claim_id: c_jaAYoZCKANgj77nLkx3rq7
          source_id: s_M1cU3n3SMfVqeqeUy9zBvw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_M1cU3n3SMfVqeqeUy9zBvw
            source_type: api_record
            title: 维基数据：王镕（Q45661863）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661863
            external_identifier: Q45661863
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_UsILT79VeXf4uZJ6BDYlm4
          claim_id: c_jaAYoZCKANgj77nLkx3rq7
          source_id: s_p11G33na4PfF9BsVCShiQC
          stance: supports
          locator: CBDB:175475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p11G33na4PfF9BsVCShiQC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎔（175475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175475&o=json
            external_identifier: CBDB:175475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.257Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MNpqEj5RiK1DD7Qfs46dCU
        subject_person_id: p_vmvqLZ7vdsKrGNSD1TycUV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aHhLXgCY4ZAniV35rhtaBd
          claim_id: c_MNpqEj5RiK1DD7Qfs46dCU
          source_id: s_M1cU3n3SMfVqeqeUy9zBvw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_M1cU3n3SMfVqeqeUy9zBvw
            source_type: api_record
            title: 维基数据：王镕（Q45661863）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661863
            external_identifier: Q45661863
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ceoNvKt4P8FEQcdeKi3NJn
        subject_person_id: p_vmvqLZ7vdsKrGNSD1TycUV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KPH5TosPzAxW6i8M96kaHC
          claim_id: c_ceoNvKt4P8FEQcdeKi3NJn
          source_id: s_p11G33na4PfF9BsVCShiQC
          stance: supports
          locator: Q45661863
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_X4rrxgCU46iyD1N45D4FfS
          claim_id: c_ceoNvKt4P8FEQcdeKi3NJn
          source_id: s_M1cU3n3SMfVqeqeUy9zBvw
          stance: supports
          locator: Q45661863
          quotation: null
          interpretation_note: null
          source:
            id: s_M1cU3n3SMfVqeqeUy9zBvw
            source_type: api_record
            title: 维基数据：王镕（Q45661863）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661863
            external_identifier: Q45661863
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_weHEQf1wzxPab3JRtHyLDG
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vmvqLZ7vdsKrGNSD1TycUV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YkZ19FGVELyfZCHAqJG5Ms
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_pPVXBKtKsASEr55CKZkV2Y
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_UqtMiphPRtVzeKC7SwMpwA
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_M1cU3n3SMfVqeqeUy9zBvw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_M1cU3n3SMfVqeqeUy9zBvw
            source_type: api_record
            title: 维基数据：王镕（Q45661863）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661863
            external_identifier: Q45661863
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_KenLdLY41qH3T8G4NexPGJ
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_p11G33na4PfF9BsVCShiQC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_p11G33na4PfF9BsVCShiQC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎔（175475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175475&o=json
            external_identifier: CBDB:175475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.257Z
            metadata_json: null
      object_person:
        id: p_ha5m4LN9UakVx5unFGkpVX
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王镕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王镕（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175475 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王镕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ha5m4LN9UakVx5unFGkpVX | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45661685）](https://www.wikidata.org/wiki/Q45661685)
- [维基数据：王镕（Q45661863）](https://www.wikidata.org/wiki/Q45661863)
- [CBDB 中国历代人物传记资料库：王迺（175472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json)
- [CBDB 中国历代人物传记资料库：王鎔（175475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175475&o=json)
