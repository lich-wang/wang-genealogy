---
schema: wang-person/v1
id: p_FYj3Ea7MLmAqyMy1S17vQe
status: active
merged_into: null
display_name: 王秬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pao7ame3hPEC8jj2P5PC3J
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7UG4S2rkxXVXsjKoDXbM7
          claim_id: c_pao7ame3hPEC8jj2P5PC3J
          source_id: s_atRR2c35R4LACagDrd4vzh
          stance: supports
          locator: CBDB:249894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249894）
          source: &a1
            id: s_atRR2c35R4LACagDrd4vzh
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 249894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249894&o=json
            external_identifier: CBDB:249894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8KvmLHtyAkzSL1QSC1zTm1
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬，明人物。成化十一年進士，籍贯黃巖，曾任州判官。（中国历代人物传记资料库 CBDB 249894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BOeGoEArlXf_MYg2cIbmSJ
          claim_id: c_8KvmLHtyAkzSL1QSC1zTm1
          source_id: s_atRR2c35R4LACagDrd4vzh
          stance: supports
          locator: CBDB:249894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5-FxsqswEFWpZbX7INuPDi
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d2dNE2KPJApVMV192KKz46
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XReIPv-AY86c2SAsNefQqs
          claim_id: c_5-FxsqswEFWpZbX7INuPDi
          source_id: s_atRR2c35R4LACagDrd4vzh
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d2dNE2KPJApVMV192KKz46
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_vgvA7if5xiBDKvg6UxD44_
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KLpmJvPQCFZbuAvhcpuoNk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3n5aL4dikKH2oJdgLcMtdL
          claim_id: c_vgvA7if5xiBDKvg6UxD44_
          source_id: s_lQ1DIbeWv8VwnzXEck3UYF
          stance: supports
          locator: CBDB：兄弟 王弼（126707）之父／母 王秬
          quotation: null
          interpretation_note: 由兄弟关系推断：王燠 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王燠 之父／母。
          source:
            id: s_lQ1DIbeWv8VwnzXEck3UYF
            source_type: api_record
            title: 中国历代人物传记资料库：王燠（CBDB 249900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249900&o=json
            external_identifier: CBDB:249900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KLpmJvPQCFZbuAvhcpuoNk
        status: active
        display_name: 王燠
        merged_into_person_id: null
    - claim:
        id: c_jS1W1LUtNb2bFDACtdLWx-
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7tBI2VLajyUUta-OgGnd8
          claim_id: c_jS1W1LUtNb2bFDACtdLWx-
          source_id: s_sgToZ_T6zS7B3yeomyIoGX
          stance: supports
          locator: CBDB：兄弟 王弼（126707）之父／母 王秬
          quotation: null
          interpretation_note: 由兄弟关系推断：王爟 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王爟 之父／母。
          source:
            id: s_sgToZ_T6zS7B3yeomyIoGX
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 249899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json
            external_identifier: CBDB:249899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZXCCHyWq79tSCS7LRL4gmZ
        status: active
        display_name: 王爟
        merged_into_person_id: null
    - claim:
        id: c_oc6ZaRakIiE1RJwA09zBc8
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofyqhjm5U4oYCGSXjslwZL
          claim_id: c_oc6ZaRakIiE1RJwA09zBc8
          source_id: s_LGHsaZ8jEgsW5wLvhdItWY
          stance: supports
          locator: CBDB：兄弟 王弼（126707）之父／母 王秬
          quotation: null
          interpretation_note: 由兄弟关系推断：王烜 与 王弼 为同胞（CBDB 记「弟」），王弼 之父／母即 王烜 之父／母。
          source:
            id: s_LGHsaZ8jEgsW5wLvhdItWY
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 249897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json
            external_identifier: CBDB:249897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wdQhPY8rmHXXmYqzK2RGEg
        status: active
        display_name: 王烜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秬 | accepted |
| bio.summary | 王秬，明人物。成化十一年進士，籍贯黃巖，曾任州判官。（中国历代人物传记资料库 CBDB 249894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_d2dNE2KPJApVMV192KKz46 | 王弼 | accepted |
| children | p_KLpmJvPQCFZbuAvhcpuoNk | 王燠 | accepted |
| children | p_ZXCCHyWq79tSCS7LRL4gmZ | 王爟 | accepted |
| children | p_wdQhPY8rmHXXmYqzK2RGEg | 王烜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爟（CBDB 249899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json)
- [中国历代人物传记资料库：王秬（CBDB 249894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249894&o=json)
- [中国历代人物传记资料库：王烜（CBDB 249897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json)
- [中国历代人物传记资料库：王燠（CBDB 249900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249900&o=json)
