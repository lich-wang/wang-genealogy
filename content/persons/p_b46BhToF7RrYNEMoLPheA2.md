---
schema: wang-person/v1
id: p_b46BhToF7RrYNEMoLPheA2
status: active
merged_into: null
display_name: 王銀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BjLDUw8UNPrWkPxdmCvr2
        subject_person_id: p_b46BhToF7RrYNEMoLPheA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Uiki7u1L6SFhQy24iFzzY
          claim_id: c_1BjLDUw8UNPrWkPxdmCvr2
          source_id: s_dNV4bZ8LZ4FB8QE3KNrYN2
          stance: supports
          locator: CBDB:210099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210099）
          source: &a1
            id: s_dNV4bZ8LZ4FB8QE3KNrYN2
            source_type: api_record
            title: 中国历代人物传记资料库：王銀（CBDB 210099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210099&o=json
            external_identifier: CBDB:210099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6zF8cYnmjLYarHufqWCKT6
        subject_person_id: p_b46BhToF7RrYNEMoLPheA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銀，明人物。隆慶五年進士，曾任翰林院編修。（中国历代人物传记资料库 CBDB 210099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qkyYvjAbHNsQIgn37R1n3g
          claim_id: c_6zF8cYnmjLYarHufqWCKT6
          source_id: s_dNV4bZ8LZ4FB8QE3KNrYN2
          stance: supports
          locator: CBDB:210099
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_-jjFN7bNMnmMcbIhouN5PJ
        subject_person_id: p_b46BhToF7RrYNEMoLPheA2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3Dh6iXRigR2p0OM44NiUT
          claim_id: c_-jjFN7bNMnmMcbIhouN5PJ
          source_id: s_dNV4bZ8LZ4FB8QE3KNrYN2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8fDiA64i7XEi5BnTAt9qhu
        status: active
        display_name: 王炳衡
        merged_into_person_id: null
    - claim:
        id: c_akrIwSDCzKo1Fk5IJaEDrj
        subject_person_id: p_b46BhToF7RrYNEMoLPheA2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z-pO0KVvaYV-Ni4_2Pjsgy
          claim_id: c_akrIwSDCzKo1Fk5IJaEDrj
          source_id: s_dNV4bZ8LZ4FB8QE3KNrYN2
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
  other: []
---

# 王銀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銀 | accepted |
| bio.summary | 王銀，明人物。隆慶五年進士，曾任翰林院編修。（中国历代人物传记资料库 CBDB 210099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8fDiA64i7XEi5BnTAt9qhu | 王炳衡 | accepted |
| descendants | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銀（CBDB 210099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210099&o=json)
