---
schema: wang-person/v1
id: p_vrWR9soQCVR5MqQmmtCKU7
status: active
merged_into: null
display_name: 王君德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vf3md2Y8DKqbsuXGVXNXMn
        subject_person_id: p_vrWR9soQCVR5MqQmmtCKU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ipn8vD3SM65BneoS7DhkUK
          claim_id: c_Vf3md2Y8DKqbsuXGVXNXMn
          source_id: s_UHBcf3JbRYmM1Sx16dEzoi
          stance: supports
          locator: CBDB:148581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148581）
          source: &a1
            id: s_UHBcf3JbRYmM1Sx16dEzoi
            source_type: api_record
            title: 中国历代人物传记资料库：王君德（CBDB 148581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148581&o=json
            external_identifier: CBDB:148581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pEGom7xcS3E318qR6iMUkt
        subject_person_id: p_vrWR9soQCVR5MqQmmtCKU7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWtAhDNgM5DdZC9R6hFQ9N
          claim_id: c_pEGom7xcS3E318qR6iMUkt
          source_id: s_UHBcf3JbRYmM1Sx16dEzoi
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
        id: c_2qoSdN0G3UD-1v3pMM_80X
        subject_person_id: p_vrWR9soQCVR5MqQmmtCKU7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSNaDLg8FcueQoQZaFebRW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsxsEXxOauxI8t8K0QXp9Y
          claim_id: c_2qoSdN0G3UD-1v3pMM_80X
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FisE7AAYkKUkQpkyCKX9xg
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 139635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json
            external_identifier: CBDB:139635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LSNaDLg8FcueQoQZaFebRW
        status: active
        display_name: 王玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君德 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LSNaDLg8FcueQoQZaFebRW | 王玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君德（CBDB 148581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148581&o=json)
- [中国历代人物传记资料库：王玄（CBDB 139635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json)
