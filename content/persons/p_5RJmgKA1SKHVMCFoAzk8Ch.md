---
schema: wang-person/v1
id: p_5RJmgKA1SKHVMCFoAzk8Ch
status: active
merged_into: null
display_name: 王納言
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVpk3d6V3H59X5cMGZVC7s
        subject_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_68Sonw4emXF4do9FFgHEuC
          claim_id: c_jVpk3d6V3H59X5cMGZVC7s
          source_id: s_WPLYy5Q3w8C88pSSYW3t6q
          stance: supports
          locator: CBDB:126659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126659）
          source: &a1
            id: s_WPLYy5Q3w8C88pSSYW3t6q
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 126659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126659&o=json
            external_identifier: CBDB:126659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFkZyUybAA1B5G1AwohcSY
        subject_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69ivG1RR1FrDLXUyhrZwMP
          claim_id: c_TFkZyUybAA1B5G1AwohcSY
          source_id: s_WPLYy5Q3w8C88pSSYW3t6q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xul_iQdGN6IERKKbUCjk3t
        subject_person_id: p_Hx9Ukkpxmi3iZhqXQH36DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d2VCQlTV1q2Pfxxn9UBtYJ
          claim_id: c_Xul_iQdGN6IERKKbUCjk3t
          source_id: s_4TpyDA2FgG8LHhCgwcHsS2
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4TpyDA2FgG8LHhCgwcHsS2
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 281213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281213&o=json
            external_identifier: CBDB:281213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hx9Ukkpxmi3iZhqXQH36DB
        status: active
        display_name: 王隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yAZW-N9sUaAPnsCYPGlMO9
        subject_person_id: p_4sb9wxGED3WQ2wGXi8FqHp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hH3znf1MQ8kIdovZtN6NCU
          claim_id: c_yAZW-N9sUaAPnsCYPGlMO9
          source_id: s_DpGPrMPYNC5Jt5pjde1HKA
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpGPrMPYNC5Jt5pjde1HKA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 281212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281212&o=json
            external_identifier: CBDB:281212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4sb9wxGED3WQ2wGXi8FqHp
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_u_WhDyX1dLcV3itPfwA1Ol
        subject_person_id: p_MHFMLg9XBL92vDxr2BeKpg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8v8c9QO76DazORjhKqTmN
          claim_id: c_u_WhDyX1dLcV3itPfwA1Ol
          source_id: s_GCy6Ym45x7EPHfb8XyFrf3
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GCy6Ym45x7EPHfb8XyFrf3
            source_type: api_record
            title: 中国历代人物传记资料库：王守敬（CBDB 281211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281211&o=json
            external_identifier: CBDB:281211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MHFMLg9XBL92vDxr2BeKpg
        status: active
        display_name: 王守敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hx9Ukkpxmi3iZhqXQH36DB | 王隆 | accepted |
| ancestors | p_4sb9wxGED3WQ2wGXi8FqHp | 王瑜 | accepted |
| ancestors | p_MHFMLg9XBL92vDxr2BeKpg | 王守敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 281213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281213&o=json)
- [中国历代人物传记资料库：王納言（CBDB 126659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126659&o=json)
- [中国历代人物传记资料库：王守敬（CBDB 281211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281211&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 281212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281212&o=json)
