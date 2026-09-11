---
schema: wang-person/v1
id: p_MAVU5hCjLKU7MKmUEk81nj
status: active
merged_into: null
display_name: 王長諧
cbdb_id: 32340
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uGxRrrRkWh4tCnvrgZuKPp
        subject_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長諧，唐人物。中国历代人物传记资料库（CBDB）以人物编号 32340 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_gjsMZ05HdlPPe2_9AO4GIc
          claim_id: c_uGxRrrRkWh4tCnvrgZuKPp
          source_id: s_4wium3k81vREhAodXWrLJj
          stance: supports
          locator: CBDB:32340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4wium3k81vREhAodXWrLJj
            source_type: api_record
            title: 中国历代人物传记资料库：王長諧（CBDB 32340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32340&o=json
            external_identifier: CBDB:32340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wXCc3RmYnJAvoR61skHa85
        subject_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長諧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bZ3m2T522amdyZryHKbpRc
          claim_id: c_wXCc3RmYnJAvoR61skHa85
          source_id: s_4wium3k81vREhAodXWrLJj
          stance: supports
          locator: CBDB:32340
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_4wium3k81vREhAodXWrLJj
            source_type: api_record
            title: 中国历代人物传记资料库：王長諧（CBDB 32340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32340&o=json
            external_identifier: CBDB:32340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8Sp2kdM08jN5Epkke88kSe
        subject_person_id: p_gvknFGecF4pt9MxYmSTtQz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i5ZtLnxc7ezUDuhZJINUa4
          claim_id: c_8Sp2kdM08jN5Epkke88kSe
          source_id: s_9n7L7ae1XmnKnS9f7PMEpj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9n7L7ae1XmnKnS9f7PMEpj
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 32336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32336&o=json
            external_identifier: CBDB:32336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gvknFGecF4pt9MxYmSTtQz
        status: active
        display_name: 王直
        merged_into_person_id: null
  children:
    - claim:
        id: c__WeHPg-dQ65PKJaTuMTbyN
        subject_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsBrTxevI8LePpkzDmT9iy
          claim_id: c__WeHPg-dQ65PKJaTuMTbyN
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VkcHAaT9EifPMtdS3BV6Gf
            source_type: api_record
            title: 中国历代人物传记资料库：王德玄（CBDB 175975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json
            external_identifier: CBDB:175975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GsA3E3fpoGBL3KAwr5V6BX
        status: active
        display_name: 王德玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王長諧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王長諧，唐人物。中国历代人物传记资料库（CBDB）以人物编号 32340 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王長諧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gvknFGecF4pt9MxYmSTtQz | 王直 | accepted |
| children | p_GsA3E3fpoGBL3KAwr5V6BX | 王德玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德玄（CBDB 175975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json)
- [中国历代人物传记资料库：王長諧（CBDB 32340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32340&o=json)
- [中国历代人物传记资料库：王直（CBDB 32336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32336&o=json)
