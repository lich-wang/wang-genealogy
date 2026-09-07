---
schema: wang-person/v1
id: p_tZSNhH7X75TMs1JoKXMurc
status: active
merged_into: null
display_name: 王纶
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iB1C5RQbAQqhHpnDmm4mmS
        subject_person_id: p_tZSNhH7X75TMs1JoKXMurc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纶，唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 158874 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KWCqkHHsz3bQauBwL86VAh
          claim_id: c_iB1C5RQbAQqhHpnDmm4mmS
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_7Or-N8v2T-4NxUTP4Jkb-u
          claim_id: c_iB1C5RQbAQqhHpnDmm4mmS
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: CBDB:158874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9E5KHi3w99hCFdpN24Bib5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（158874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json
            external_identifier: CBDB:158874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.536Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZxTH8fLP9WYWKyfUr2h1QE
        subject_person_id: p_tZSNhH7X75TMs1JoKXMurc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7ByyeaHmrUDvV3GnPjwK33
          claim_id: c_ZxTH8fLP9WYWKyfUr2h1QE
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: Q45582330
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_Wnj8ZPXgPiLtD8rDMC8CGc
          claim_id: c_ZxTH8fLP9WYWKyfUr2h1QE
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: Q45582330
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N28B996DYQ4M7TZMZp5yXF
        subject_person_id: p_TWVZdtkHCAJE3rdF74jZxi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tZSNhH7X75TMs1JoKXMurc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_S7mMwCmZKTEo6sEp3cE2sz
          claim_id: c_N28B996DYQ4M7TZMZp5yXF
          source_id: s_ofPoK33QJicxdXg6F8mP2p
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ofPoK33QJicxdXg6F8mP2p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之咸（146035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146035&o=json
            external_identifier: CBDB:146035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.642Z
            metadata_json: null
        - id: cs_cKkHNAh49oDonmNXpcJfE2
          claim_id: c_N28B996DYQ4M7TZMZp5yXF
          source_id: s_4RdZ747yZ6xNHgbG9QBNLo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4RdZ747yZ6xNHgbG9QBNLo
            source_type: api_record
            title: 维基数据：王之咸（Q45490683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45490683
            external_identifier: Q45490683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
        - id: cs_TakZ3zQcAZ8U2zzAyub2iK
          claim_id: c_N28B996DYQ4M7TZMZp5yXF
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_z8k8zYHvXo8NkCpdxdDcnf
          claim_id: c_N28B996DYQ4M7TZMZp5yXF
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9E5KHi3w99hCFdpN24Bib5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（158874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json
            external_identifier: CBDB:158874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.536Z
            metadata_json: null
      object_person:
        id: p_TWVZdtkHCAJE3rdF74jZxi
        status: active
        display_name: 王之咸
        merged_into_person_id: null
  children:
    - claim:
        id: c_B7umEJQ2SyXMcDdzV6Lx5z
        subject_person_id: p_tZSNhH7X75TMs1JoKXMurc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_saaECjeVK4P193bjeUAPMi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SbnrYYXHYwCdCytvnLUCjG
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9E5KHi3w99hCFdpN24Bib5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（158874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json
            external_identifier: CBDB:158874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.536Z
            metadata_json: null
        - id: cs_cR9ysnUs5xALozn4BEBSfm
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_eoX4eCfN1RfhZonRa6nE5D
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_Naxz7YhaA4HqR6H7WMRfgF
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
      object_person:
        id: p_saaECjeVK4P193bjeUAPMi
        status: active
        display_name: 王略
        merged_into_person_id: null
    - claim:
        id: c_w2BZyxWmQ5eMU164Zqy9k4
        subject_person_id: p_tZSNhH7X75TMs1JoKXMurc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k4snsMNDBbDEPMCiLRM13y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hqBf5HE1ir851Zwv5Q7KC7
          claim_id: c_w2BZyxWmQ5eMU164Zqy9k4
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_vCHG3tvH6PkFzAn9LdMHBG
          claim_id: c_w2BZyxWmQ5eMU164Zqy9k4
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9E5KHi3w99hCFdpN24Bib5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（158874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json
            external_identifier: CBDB:158874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.536Z
            metadata_json: null
        - id: cs_vDCgNo9eVSR3njDnPV6Euq
          claim_id: c_w2BZyxWmQ5eMU164Zqy9k4
          source_id: s_wzSwr7UfR1Q8AqwVK6pmCu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wzSwr7UfR1Q8AqwVK6pmCu
            source_type: api_record
            title: 维基数据：王𠧨（Q45594285）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45594285
            external_identifier: Q45594285
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_DR1392Q8Psapy27xgrUgBu
          claim_id: c_w2BZyxWmQ5eMU164Zqy9k4
          source_id: s_EApQSWYt5yLGZitGrfru9T
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EApQSWYt5yLGZitGrfru9T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王?（190242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190242&o=json
            external_identifier: CBDB:190242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.740Z
            metadata_json: null
      object_person:
        id: p_k4snsMNDBbDEPMCiLRM13y
        status: active
        display_name: 王𠧨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纶，唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 158874 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王纶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TWVZdtkHCAJE3rdF74jZxi | 王之咸 | accepted |
| children | p_saaECjeVK4P193bjeUAPMi | 王略 | accepted |
| children | p_k4snsMNDBbDEPMCiLRM13y | 王𠧨 | accepted |

## 外部来源

- [维基数据：王略（Q45582459）](https://www.wikidata.org/wiki/Q45582459)
- [维基数据：王纶（Q45582330）](https://www.wikidata.org/wiki/Q45582330)
- [维基数据：王之咸（Q45490683）](https://www.wikidata.org/wiki/Q45490683)
- [维基数据：王𠧨（Q45594285）](https://www.wikidata.org/wiki/Q45594285)
- [CBDB 中国历代人物传记资料库：王?（190242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190242&o=json)
- [CBDB 中国历代人物传记资料库：王略（158876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json)
- [CBDB 中国历代人物传记资料库：王綸（158874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json)
- [CBDB 中国历代人物传记资料库：王之咸（146035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146035&o=json)
