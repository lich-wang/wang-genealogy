---
schema: wang-person/v1
id: p_baPx7xrKQVVrCaN9KsE9x5
status: active
merged_into: null
display_name: 王虔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeGZNCE3tvDns9HrLvcvVB
        subject_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Njes7CVkDDUVAzJ629NCqD
          claim_id: c_NeGZNCE3tvDns9HrLvcvVB
          source_id: s_5MDRV83xBanbWjXQ7wUmFY
          stance: supports
          locator: CBDB:683886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683886）
          source: &a1
            id: s_5MDRV83xBanbWjXQ7wUmFY
            source_type: api_record
            title: 中国历代人物传记资料库：王虔（CBDB 683886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683886&o=json
            external_identifier: CBDB:683886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_we9bSj19s6DmKfhsowfsvw
        subject_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aF5Q2ApyyZoFqA5nCYBQY9
          claim_id: c_we9bSj19s6DmKfhsowfsvw
          source_id: s_5MDRV83xBanbWjXQ7wUmFY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VeqawwQaxmA458t2XoKHPx
        subject_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mmxBAZq9qSESshC4uQKn38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_su24upW7VjY0XRjhya8HQN
          claim_id: c_VeqawwQaxmA458t2XoKHPx
          source_id: s_QHon84dFvcWLqJQyDMWW81
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QHon84dFvcWLqJQyDMWW81
            source_type: api_record
            title: 中国历代人物传记资料库：王茂謙（CBDB 683892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683892&o=json
            external_identifier: CBDB:683892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mmxBAZq9qSESshC4uQKn38
        status: active
        display_name: 王茂謙
        merged_into_person_id: null
    - claim:
        id: c__dkmYAnR6Xi0xY1aZa_xzE
        subject_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xudQJZpJJZhahsozMDV86i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__yftycTAyp24Xu0tsysiDA
          claim_id: c__dkmYAnR6Xi0xY1aZa_xzE
          source_id: s_vBzDBqA84pq5oAn7YowZsE
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vBzDBqA84pq5oAn7YowZsE
            source_type: api_record
            title: 中国历代人物传记资料库：王茂瓊（CBDB 683891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683891&o=json
            external_identifier: CBDB:683891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xudQJZpJJZhahsozMDV86i
        status: active
        display_name: 王茂瓊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JlggYeY5aqn8AW1snvJxNw
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f-Zmho65zbECAKTwtWSbQb
          claim_id: c_JlggYeY5aqn8AW1snvJxNw
          source_id: s_coq7t4H45PM4tE5hKEgEQY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_coq7t4H45PM4tE5hKEgEQY
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 683877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json
            external_identifier: CBDB:683877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_481kQQwAFrYze548qXRkp6
        status: active
        display_name: 王章
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王虔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mmxBAZq9qSESshC4uQKn38 | 王茂謙 | accepted |
| children | p_xudQJZpJJZhahsozMDV86i | 王茂瓊 | accepted |
| ancestors | p_481kQQwAFrYze548qXRkp6 | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂謙（CBDB 683892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683892&o=json)
- [中国历代人物传记资料库：王茂瓊（CBDB 683891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683891&o=json)
- [中国历代人物传记资料库：王虔（CBDB 683886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683886&o=json)
- [中国历代人物传记资料库：王章（CBDB 683877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683877&o=json)
