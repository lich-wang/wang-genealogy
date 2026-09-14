---
schema: wang-person/v1
id: p_soPWG2JxysqfJjV8tB16nV
status: active
merged_into: null
display_name: 王紀綱
cbdb_id: 274338
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AkC1urM45KqnhtX9pyD8z3
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀綱，明人物。弘治十八年進士，籍贯順慶府。（中国历代人物传记资料库 CBDB 274338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_k1QwSUMCrU7Y-HdMlI0_El
          claim_id: c_AkC1urM45KqnhtX9pyD8z3
          source_id: s_ACEqbZyCp1oBaqkEBZRKE3
          stance: supports
          locator: CBDB:274338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ACEqbZyCp1oBaqkEBZRKE3
            source_type: api_record
            title: 中国历代人物传记资料库：王紀綱（CBDB 274338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json
            external_identifier: CBDB:274338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ezCJdVm6b98Lq4LrBWitRQ
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Actwh4haTLmKTmZP4yeAL5
          claim_id: c_ezCJdVm6b98Lq4LrBWitRQ
          source_id: s_ACEqbZyCp1oBaqkEBZRKE3
          stance: supports
          locator: CBDB:274338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hvcBGueYHsjVANiw3xnE0O
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dpjjcdFBdzlbV7mAadnuI
          claim_id: c_hvcBGueYHsjVANiw3xnE0O
          source_id: s_ACEqbZyCp1oBaqkEBZRKE3
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ACEqbZyCp1oBaqkEBZRKE3
            source_type: api_record
            title: 中国历代人物传记资料库：王紀綱（CBDB 274338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json
            external_identifier: CBDB:274338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kegtQkxMvsxG83EpfKScwb
        status: active
        display_name: 王昂
        merged_into_person_id: null
    - claim:
        id: c_9GxKMgo5pzk0d8EL1ACt2e
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oUaMUZrPpVuVsszSeDeIb6
          claim_id: c_9GxKMgo5pzk0d8EL1ACt2e
          source_id: s_cEHNWs8zOKo_tRXjBvJ0Uf
          stance: supports
          locator: CBDB：兄弟 王昂（126608）之父／母 王紀綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王斅 与 王昂 为同胞（CBDB 记「弟」），王昂 之父／母即 王斅 之父／母。
          source:
            id: s_cEHNWs8zOKo_tRXjBvJ0Uf
            source_type: api_record
            title: 中国历代人物传记资料库：王斅（CBDB 274343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json
            external_identifier: CBDB:274343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        status: active
        display_name: 王斅
        merged_into_person_id: null
    - claim:
        id: c_Stw5ilWMWjU8cu8SfcNi2w
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PRSUawoVPuwm3HrkVkH8QH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fUQcXwgSada7QTbonayy9f
          claim_id: c_Stw5ilWMWjU8cu8SfcNi2w
          source_id: s_02hFZWA2E8wD7Zh5-vSsFG
          stance: supports
          locator: CBDB：兄弟 王昂（126608）之父／母 王紀綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王翱 与 王昂 为同胞（CBDB 记「弟」），王昂 之父／母即 王翱 之父／母。
          source:
            id: s_02hFZWA2E8wD7Zh5-vSsFG
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 274342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274342&o=json
            external_identifier: CBDB:274342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRSUawoVPuwm3HrkVkH8QH
        status: active
        display_name: 王翱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紀綱，明人物。弘治十八年進士，籍贯順慶府。（中国历代人物传记资料库 CBDB 274338） | accepted |
| name.primary | 王紀綱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kegtQkxMvsxG83EpfKScwb | 王昂 | accepted |
| children | p_MEZ9QC7g8rrvbrgdWkJ5Qf | 王斅 | accepted |
| children | p_PRSUawoVPuwm3HrkVkH8QH | 王翱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翱（CBDB 274342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274342&o=json)
- [中国历代人物传记资料库：王紀綱（CBDB 274338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json)
- [中国历代人物传记资料库：王斅（CBDB 274343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json)
