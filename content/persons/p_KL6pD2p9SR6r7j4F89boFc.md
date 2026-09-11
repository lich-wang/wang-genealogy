---
schema: wang-person/v1
id: p_KL6pD2p9SR6r7j4F89boFc
status: active
merged_into: null
display_name: 王衡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7r15EMAcA867SBRRgxAf2
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXVdFqrxwjuc67A8iv96PP
          claim_id: c_s7r15EMAcA867SBRRgxAf2
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: CBDB:126831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126831）
          source: &a1
            id: s_fXkoxige6XKe16u4aLm1LC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 126831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json
            external_identifier: CBDB:126831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_684oZaZMciL8iQDyuJ7pDF
        subject_person_id: p_KL6pD2p9SR6r7j4F89boFc
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
        - id: cs_Pc19bqLv5W5mGVKZVQcBsk
          claim_id: c_684oZaZMciL8iQDyuJ7pDF
          source_id: s_fXkoxige6XKe16u4aLm1LC
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
        id: c_yuKy0CqhEGl2Qc5OSg4r42
        subject_person_id: p_xVTypDWdUQ3wcoicLvKHN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gDysBRfSV_y6QpzDLxEnhh
          claim_id: c_yuKy0CqhEGl2Qc5OSg4r42
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xVTypDWdUQ3wcoicLvKHN5
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4xFVgx1eoD0SAoOHaYndwB
        subject_person_id: p_BAsTPzr6Vm683uWTRsXWEW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lVfHCe3UdsSQHTbYrbTfVh
          claim_id: c_4xFVgx1eoD0SAoOHaYndwB
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BAsTPzr6Vm683uWTRsXWEW
        status: active
        display_name: 王廣齋
        merged_into_person_id: null
    - claim:
        id: c_egJ6VOVXgqKa_sorop_vBj
        subject_person_id: p_GV5BzNPr7Y3sJXX4Dxcndh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h94-zuwJ5QTgsk8oKIaIH9
          claim_id: c_egJ6VOVXgqKa_sorop_vBj
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GV5BzNPr7Y3sJXX4Dxcndh
        status: active
        display_name: 王志崇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xVTypDWdUQ3wcoicLvKHN5 | 王穆 | accepted |
| ancestors | p_BAsTPzr6Vm683uWTRsXWEW | 王廣齋 | accepted |
| ancestors | p_GV5BzNPr7Y3sJXX4Dxcndh | 王志崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 126831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json)
