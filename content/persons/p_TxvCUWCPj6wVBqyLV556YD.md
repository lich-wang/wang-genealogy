---
schema: wang-person/v1
id: p_TxvCUWCPj6wVBqyLV556YD
status: active
merged_into: null
display_name: 王大謨
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sh3G4sjp4Qxr383QB3u3jD
        subject_person_id: p_TxvCUWCPj6wVBqyLV556YD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D6oACwuN9tiFszA48P4BQG
          claim_id: c_Sh3G4sjp4Qxr383QB3u3jD
          source_id: s_B3iktSeP1AKpuBhLNWeGo6
          stance: supports
          locator: CBDB:206615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206615）
          source: &a1
            id: s_B3iktSeP1AKpuBhLNWeGo6
            source_type: api_record
            title: 中国历代人物传记资料库：王大謨（CBDB 206615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206615&o=json
            external_identifier: CBDB:206615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V13PpEzizn2sbVKd2UR5MW
        subject_person_id: p_TxvCUWCPj6wVBqyLV556YD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g3x3Pc1CSm64DH1nnGEhFA
          claim_id: c_V13PpEzizn2sbVKd2UR5MW
          source_id: s_B3iktSeP1AKpuBhLNWeGo6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3T7wi3u7orKikfT4zigDDq
        subject_person_id: p_TxvCUWCPj6wVBqyLV556YD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大謨（生于1553年），明人物。萬曆八年進士，籍贯廣濟，入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 206615）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hijGjuSPoqJkkFuPx56l16
          claim_id: c_3T7wi3u7orKikfT4zigDDq
          source_id: s_B3iktSeP1AKpuBhLNWeGo6
          stance: supports
          locator: CBDB:206615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HDY8hWxjAwijb_NQ5mkFt_
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1sD2JJo9mCJgNxC-nxeMi
          claim_id: c_HDY8hWxjAwijb_NQ5mkFt_
          source_id: s_yrA1AQ1LxXvZAAxVT1YMNp
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yrA1AQ1LxXvZAAxVT1YMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 220569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220569&o=json
            external_identifier: CBDB:220569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CZQQ91VfnuK7NuqpB8hoXK
        status: active
        display_name: 王照
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_404N6DGPcC4WRhLUu2fAGN
        subject_person_id: p_3JKHRJ23iN65rBD3F3StTg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDQ_pLMJjiqHYfFgIjOj9F
          claim_id: c_404N6DGPcC4WRhLUu2fAGN
          source_id: s_VbCu7ZyhhizH9wNWej12Xj
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VbCu7ZyhhizH9wNWej12Xj
            source_type: api_record
            title: 中国历代人物传记资料库：王伯蘭（CBDB 220567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220567&o=json
            external_identifier: CBDB:220567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3JKHRJ23iN65rBD3F3StTg
        status: active
        display_name: 王伯蘭
        merged_into_person_id: null
    - claim:
        id: c_l0LLZAaIXJXhU-DzV0dZQU
        subject_person_id: p_oiJBmfvECXjH8hvC9C6oVk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cN2LevjJSzdaypW9Ysiaxo
          claim_id: c_l0LLZAaIXJXhU-DzV0dZQU
          source_id: s_9PDX4FwaVZztDRrMU8y3gC
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9PDX4FwaVZztDRrMU8y3gC
            source_type: api_record
            title: 中国历代人物传记资料库：王友方（CBDB 220568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220568&o=json
            external_identifier: CBDB:220568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oiJBmfvECXjH8hvC9C6oVk
        status: active
        display_name: 王友方
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大謨 | accepted |
| birth.date | 1553年 | accepted |
| bio.summary | 王大謨（生于1553年），明人物。萬曆八年進士，籍贯廣濟，入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 206615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CZQQ91VfnuK7NuqpB8hoXK | 王照 | accepted |
| ancestors | p_3JKHRJ23iN65rBD3F3StTg | 王伯蘭 | accepted |
| ancestors | p_oiJBmfvECXjH8hvC9C6oVk | 王友方 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯蘭（CBDB 220567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220567&o=json)
- [中国历代人物传记资料库：王大謨（CBDB 206615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206615&o=json)
- [中国历代人物传记资料库：王友方（CBDB 220568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220568&o=json)
- [中国历代人物传记资料库：王照（CBDB 220569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220569&o=json)
