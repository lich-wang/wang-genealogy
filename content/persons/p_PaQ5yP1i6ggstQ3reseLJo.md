---
schema: wang-person/v1
id: p_PaQ5yP1i6ggstQ3reseLJo
status: active
merged_into: null
display_name: 王尚準
cbdb_id: 185765
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5sLReVGtyFGgqcvnJ9NNrT
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚準（卒于879年），史料所见人物。本项目依据《中国历代人物传记资料库：王尚準（CBDB 185765）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zSs44BBvXqjVKuOZvlIJmT
          claim_id: c_5sLReVGtyFGgqcvnJ9NNrT
          source_id: s_psDoFcvDBXqKDiS68DhsWm
          stance: supports
          locator: CBDB:185765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_psDoFcvDBXqKDiS68DhsWm
            source_type: api_record
            title: 中国历代人物传记资料库：王尚準（CBDB 185765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185765&o=json
            external_identifier: CBDB:185765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T8dwptEyrgANx4X9mrinZb
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 879年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0879-01-01
            latest: 0879-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YtCy9raNWajQWoCGZNF4r1
          claim_id: c_T8dwptEyrgANx4X9mrinZb
          source_id: s_psDoFcvDBXqKDiS68DhsWm
          stance: supports
          locator: CBDB:185765
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 879
          source:
            id: s_psDoFcvDBXqKDiS68DhsWm
            source_type: api_record
            title: 中国历代人物传记资料库：王尚準（CBDB 185765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185765&o=json
            external_identifier: CBDB:185765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymUucGo9MVeW9gyzfJ7Jzv
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚準
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z5P3qL4D82EuEMC84E2NUu
          claim_id: c_ymUucGo9MVeW9gyzfJ7Jzv
          source_id: s_psDoFcvDBXqKDiS68DhsWm
          stance: supports
          locator: CBDB:185765
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 879
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_o3OCIrBM2wB8hMC0FhLUZi
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26NGcZpVYMgd8LBmgpqp1d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d4NL27GRYE0M5v6R5nHC2X
          claim_id: c_o3OCIrBM2wB8hMC0FhLUZi
          source_id: s_1LeAtLybSJuwrnGoHAY6tV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1LeAtLybSJuwrnGoHAY6tV
            source_type: api_record
            title: 中国历代人物传记资料库：王定和（CBDB 186151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186151&o=json
            external_identifier: CBDB:186151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26NGcZpVYMgd8LBmgpqp1d
        status: active
        display_name: 王定和
        merged_into_person_id: null
    - claim:
        id: c_m5MpwUEo-kUnkYPEX_ObTF
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5rHGpGBCFoFL3QgPEzj8DQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79O_20rZGor0Suw_8zgYLT
          claim_id: c_m5MpwUEo-kUnkYPEX_ObTF
          source_id: s_VFU25PWG4H6FKkEgGPLWVr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VFU25PWG4H6FKkEgGPLWVr
            source_type: api_record
            title: 中国历代人物传记资料库：王定簡（CBDB 186152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186152&o=json
            external_identifier: CBDB:186152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5rHGpGBCFoFL3QgPEzj8DQ
        status: active
        display_name: 王定簡
        merged_into_person_id: null
    - claim:
        id: c_GloCiI08SeeybYZXBJp575
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_spYpogBorf4HmU9rCheCWD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gs-cUnyLm7eofIYT5CRzQz
          claim_id: c_GloCiI08SeeybYZXBJp575
          source_id: s_Jy5NaXb2vqv62L9my4yoUZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jy5NaXb2vqv62L9my4yoUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王定禮（CBDB 186153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186153&o=json
            external_identifier: CBDB:186153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_spYpogBorf4HmU9rCheCWD
        status: active
        display_name: 王定禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6mam1XgDaMfakhaoIxvOpj
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mQ3xNSgJDxm26bPnWwopAA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nW_r-o6YOzsQW2sa8Y6gzC
          claim_id: c_6mam1XgDaMfakhaoIxvOpj
          source_id: s_fQHjjC9rRLeyrIhrmKB_g6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fQHjjC9rRLeyrIhrmKB_g6
            source_type: api_record
            title: 中国历代人物传记资料库：竇氏(竇雲昇女)（CBDB 144831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144831&o=json
            external_identifier: CBDB:144831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mQ3xNSgJDxm26bPnWwopAA
        status: active
        display_name: 竇氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王尚準

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚準（卒于879年），史料所见人物。本项目依据《中国历代人物传记资料库：王尚準（CBDB 185765）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 879年 | accepted |
| name.primary | 王尚準 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_26NGcZpVYMgd8LBmgpqp1d | 王定和 | accepted |
| children | p_5rHGpGBCFoFL3QgPEzj8DQ | 王定簡 | accepted |
| children | p_spYpogBorf4HmU9rCheCWD | 王定禮 | accepted |
| spouses | p_mQ3xNSgJDxm26bPnWwopAA | 竇氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：竇氏(竇雲昇女)（CBDB 144831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144831&o=json)
- [中国历代人物传记资料库：王定和（CBDB 186151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186151&o=json)
- [中国历代人物传记资料库：王定簡（CBDB 186152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186152&o=json)
- [中国历代人物传记资料库：王定禮（CBDB 186153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186153&o=json)
- [中国历代人物传记资料库：王尚準（CBDB 185765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185765&o=json)
