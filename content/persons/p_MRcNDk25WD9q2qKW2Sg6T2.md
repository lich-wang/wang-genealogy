---
schema: wang-person/v1
id: p_MRcNDk25WD9q2qKW2Sg6T2
status: active
merged_into: null
display_name: 王誠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7xbVvhiTCDbEDECJP34PR
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fnW4qovhQmCe1VWLnw3yKf
          claim_id: c_K7xbVvhiTCDbEDECJP34PR
          source_id: s_5dur9KCoLTcead74DbNpXZ
          stance: supports
          locator: CBDB:696155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696155）
          source: &a1
            id: s_5dur9KCoLTcead74DbNpXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 696155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696155&o=json
            external_identifier: CBDB:696155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7p3T28wkUR6KChXsQ1yJpD
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
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
        - id: cs_V9Xzfe2kLm1tKftYEH4Va6
          claim_id: c_7p3T28wkUR6KChXsQ1yJpD
          source_id: s_5dur9KCoLTcead74DbNpXZ
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
        id: c_mYJDy-wlp3l7V-6wYImO9n
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AFKu7y5cKNe6h7aSeSk26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZIqfvTnZuXQQ9etFsxWKpf
          claim_id: c_mYJDy-wlp3l7V-6wYImO9n
          source_id: s_v9ruH9BS5qvkvSzL2gx5DB
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v9ruH9BS5qvkvSzL2gx5DB
            source_type: api_record
            title: 中国历代人物传记资料库：王婢兒（CBDB 696182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json
            external_identifier: CBDB:696182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4AFKu7y5cKNe6h7aSeSk26
        status: active
        display_name: 王婢兒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lSs0oYyP-ukTmpxss3WSOe
        subject_person_id: p_93knEVXDHk5dRYRuf8P4GQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e360_PucLWMl0u57r9CAqE
          claim_id: c_lSs0oYyP-ukTmpxss3WSOe
          source_id: s_jK7td8gv5mcoMZA6GCyUx5
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jK7td8gv5mcoMZA6GCyUx5
            source_type: api_record
            title: 中国历代人物传记资料库：王某贊（CBDB 696158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696158&o=json
            external_identifier: CBDB:696158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_93knEVXDHk5dRYRuf8P4GQ
        status: active
        display_name: 王某贊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4AFKu7y5cKNe6h7aSeSk26 | 王婢兒 | accepted |
| ancestors | p_93knEVXDHk5dRYRuf8P4GQ | 王某贊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王婢兒（CBDB 696182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json)
- [中国历代人物传记资料库：王誠（CBDB 696155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696155&o=json)
- [中国历代人物传记资料库：王某贊（CBDB 696158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696158&o=json)
