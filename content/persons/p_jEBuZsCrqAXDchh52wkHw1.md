---
schema: wang-person/v1
id: p_jEBuZsCrqAXDchh52wkHw1
status: active
merged_into: null
display_name: 王克慎
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vj5DWUv62j8PQDs45BJUui
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克慎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AyWUZpKy3si6XNYZvPK1Lz
          claim_id: c_vj5DWUv62j8PQDs45BJUui
          source_id: s_pG7jpnHvmqfBcpMA9vKwru
          stance: supports
          locator: CBDB:223424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223424）
          source: &a1
            id: s_pG7jpnHvmqfBcpMA9vKwru
            source_type: api_record
            title: 中国历代人物传记资料库：王克慎（CBDB 223424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223424&o=json
            external_identifier: CBDB:223424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZbfiLSNAA1Z6oCGWp9h8rM
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克慎，明人物。萬曆十一年進士，籍贯寧晉，曾任知縣。（中国历代人物传记资料库 CBDB 223424）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s6dSpnlFv69MEKR5yJVZsw
          claim_id: c_ZbfiLSNAA1Z6oCGWp9h8rM
          source_id: s_pG7jpnHvmqfBcpMA9vKwru
          stance: supports
          locator: CBDB:223424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nEoX1f4wCQ-qJ7up0CAXqO
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3D1ztFEygAVyyfATLEVR1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gUvqjJv9M-2gugNaOjTG61
          claim_id: c_nEoX1f4wCQ-qJ7up0CAXqO
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WyiFq24QS7Fy2DiGFUazoa
            source_type: api_record
            title: 中国历代人物传记资料库：王之棟（CBDB 206799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json
            external_identifier: CBDB:206799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3D1ztFEygAVyyfATLEVR1H
        status: active
        display_name: 王之棟
        merged_into_person_id: null
    - claim:
        id: c_W4OYkodGGe0ypSV_1-1peN
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RGdzAAiXNPB57eZEMA9dci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jqwPzuUKxo0RlLaDvByMp
          claim_id: c_W4OYkodGGe0ypSV_1-1peN
          source_id: s_8YGgHBDie1A9AdQ3QwiFbV
          stance: supports
          locator: CBDB：兄弟 王之棟（206799）之父／母 王克慎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之材 与 王之棟 为同胞（CBDB 记「兄」），王之棟 之父／母即 王之材 之父／母。
          source:
            id: s_8YGgHBDie1A9AdQ3QwiFbV
            source_type: api_record
            title: 中国历代人物传记资料库：王之材（CBDB 223428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json
            external_identifier: CBDB:223428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGdzAAiXNPB57eZEMA9dci
        status: active
        display_name: 王之材
        merged_into_person_id: null
    - claim:
        id: c_CQ6UXR5oSg7bLUqk14H9Ga
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RGkE7nJ829sNmXsLPHc5JN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VdXu4gU3uB0nPta6tiHZxB
          claim_id: c_CQ6UXR5oSg7bLUqk14H9Ga
          source_id: s_PG6f05l5B3FyoqIQPALAxF
          stance: supports
          locator: CBDB：兄弟 王之棟（206799）之父／母 王克慎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之楫 与 王之棟 为同胞（CBDB 记「兄」），王之棟 之父／母即 王之楫 之父／母。
          source:
            id: s_PG6f05l5B3FyoqIQPALAxF
            source_type: api_record
            title: 中国历代人物传记资料库：王之楫（CBDB 223429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223429&o=json
            external_identifier: CBDB:223429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGkE7nJ829sNmXsLPHc5JN
        status: active
        display_name: 王之楫
        merged_into_person_id: null
    - claim:
        id: c_3iCVdqJ88bUNVAajnrVPfl
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_suJYySM6Uc1DV5xUJi1SZW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gumuXX9iUasN1_RRALh7QV
          claim_id: c_3iCVdqJ88bUNVAajnrVPfl
          source_id: s_cfYJVV9JPYRy5pjdbZy6UK
          stance: supports
          locator: CBDB：兄弟 王之棟（206799）之父／母 王克慎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之梅 与 王之棟 为同胞（CBDB 记「兄」），王之棟 之父／母即 王之梅 之父／母。
          source:
            id: s_cfYJVV9JPYRy5pjdbZy6UK
            source_type: api_record
            title: 中国历代人物传记资料库：王之梅（CBDB 223430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json
            external_identifier: CBDB:223430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_suJYySM6Uc1DV5xUJi1SZW
        status: active
        display_name: 王之梅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克慎 | accepted |
| bio.summary | 王克慎，明人物。萬曆十一年進士，籍贯寧晉，曾任知縣。（中国历代人物传记资料库 CBDB 223424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3D1ztFEygAVyyfATLEVR1H | 王之棟 | accepted |
| children | p_RGdzAAiXNPB57eZEMA9dci | 王之材 | accepted |
| children | p_RGkE7nJ829sNmXsLPHc5JN | 王之楫 | accepted |
| children | p_suJYySM6Uc1DV5xUJi1SZW | 王之梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克慎（CBDB 223424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223424&o=json)
- [中国历代人物传记资料库：王之材（CBDB 223428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json)
- [中国历代人物传记资料库：王之棟（CBDB 206799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json)
- [中国历代人物传记资料库：王之楫（CBDB 223429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223429&o=json)
- [中国历代人物传记资料库：王之梅（CBDB 223430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json)
