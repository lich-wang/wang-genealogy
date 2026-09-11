---
schema: wang-person/v1
id: p_SuoASrvEvTdJvx88W9i9eq
status: active
merged_into: null
display_name: 王德成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPxuCEfZJDg71oGiU41F7y
        subject_person_id: p_SuoASrvEvTdJvx88W9i9eq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6RLrakPLfG2531yJmsHA7C
          claim_id: c_tPxuCEfZJDg71oGiU41F7y
          source_id: s_R57ac3Dvu35FfgsCBd6wQr
          stance: supports
          locator: CBDB:262602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262602）
          source: &a1
            id: s_R57ac3Dvu35FfgsCBd6wQr
            source_type: api_record
            title: 中国历代人物传记资料库：王德成（CBDB 262602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262602&o=json
            external_identifier: CBDB:262602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p1s5qFqQ1wCM7gSPMvHbi5
        subject_person_id: p_SuoASrvEvTdJvx88W9i9eq
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
        - id: cs_nZHAmA4BuHsTjsoUudTbjg
          claim_id: c_p1s5qFqQ1wCM7gSPMvHbi5
          source_id: s_R57ac3Dvu35FfgsCBd6wQr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_JUQ3bWlfTYg9dZPx5LQqaB
        subject_person_id: p_SuoASrvEvTdJvx88W9i9eq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2ivdyuT2PUd95aURm25j3Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kyY16zK6rV9RheTTtlukD9
          claim_id: c_JUQ3bWlfTYg9dZPx5LQqaB
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第八十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yBSfQfimThTBXufFM9ub6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 200767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json
            external_identifier: CBDB:200767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ivdyuT2PUd95aURm25j3Y
        status: active
        display_name: 王俸
        merged_into_person_id: null
  other: []
---

# 王德成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2ivdyuT2PUd95aURm25j3Y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德成（CBDB 262602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262602&o=json)
- [中国历代人物传记资料库：王俸（CBDB 200767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json)
