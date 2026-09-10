---
schema: wang-person/v1
id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
status: active
merged_into: null
display_name: 王甫林
cbdb_id: 231568
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KdTbVwzCpBkUEazZSCkWFK
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫林，明人物。中国历代人物传记资料库（CBDB）以人物编号 231568 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ry3oDmGBl7FotRyXWJW1vf
          claim_id: c_KdTbVwzCpBkUEazZSCkWFK
          source_id: s_xRuiyedp74GbKDHJTo6vwQ
          stance: supports
          locator: CBDB:231568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xRuiyedp74GbKDHJTo6vwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王甫林（CBDB 231568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231568&o=json
            external_identifier: CBDB:231568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r39cyBet8Q1AyZy5Q5brnu
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QgPJf6Q4bjHDmtDnHCQG4Z
          claim_id: c_r39cyBet8Q1AyZy5Q5brnu
          source_id: s_xRuiyedp74GbKDHJTo6vwQ
          stance: supports
          locator: CBDB:231568
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_xRuiyedp74GbKDHJTo6vwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王甫林（CBDB 231568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231568&o=json
            external_identifier: CBDB:231568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WGQoQPJWdOaVGDZ6fKSseX
        subject_person_id: p_4bu2im8699zCsccbtJF1P5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZedctSzMyq1QpRcFGFW9J
          claim_id: c_WGQoQPJWdOaVGDZ6fKSseX
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a1
            id: s_kEMvWdXNEMrMUFHnwDnn61
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 207345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json
            external_identifier: CBDB:207345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4bu2im8699zCsccbtJF1P5
        status: active
        display_name: 王某中
        merged_into_person_id: null
  children:
    - claim:
        id: c_8gITiTW42Lj8rwHU8Dd1dJ
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IF1QRaoJbp1MozUWC5QACt
          claim_id: c_8gITiTW42Lj8rwHU8Dd1dJ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1GhPFs5m4G2BPwjpU26jtR
        status: active
        display_name: 王亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王甫林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甫林，明人物。中国历代人物传记资料库（CBDB）以人物编号 231568 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王甫林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4bu2im8699zCsccbtJF1P5 | 王某中 | accepted |
| children | p_1GhPFs5m4G2BPwjpU26jtR | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫林（CBDB 231568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231568&o=json)
- [中国历代人物传记资料库：王亮（CBDB 207345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json)
