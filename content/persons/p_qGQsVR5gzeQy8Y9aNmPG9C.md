---
schema: wang-person/v1
id: p_qGQsVR5gzeQy8Y9aNmPG9C
status: active
merged_into: null
display_name: 王槐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VFw3dRw9oqB572Af8TNT8A
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zCeUuca9xC7XefNNAFgmu1
          claim_id: c_VFw3dRw9oqB572Af8TNT8A
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: CBDB:280915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280915）
          source: &a1
            id: s_hSYp21GgkBHXpWFmbVWv24
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 280915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json
            external_identifier: CBDB:280915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9TGECFumMfMkLbKpD1ptTy
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j8k_toEy8qwWrXa_dodDN6
          claim_id: c_9TGECFumMfMkLbKpD1ptTy
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: CBDB:280915
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZlYo6xkp99jNi6RrN9qeqj
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_d1t7z6aKXprWxdf2pfTV
          claim_id: c_ZlYo6xkp99jNi6RrN9qeqj
          source_id: s_hSYp21GgkBHXpWFmbVWv24
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 280915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280915&o=json)
