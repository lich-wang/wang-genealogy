---
schema: wang-person/v1
id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
status: active
merged_into: null
display_name: 王文進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RSNQj2GmKbC5xd44ZBbnL3
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QH4wLxm1WK5AfMNG5L3fyH
          claim_id: c_RSNQj2GmKbC5xd44ZBbnL3
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: CBDB:280988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280988）
          source: &a1
            id: s_nhVzFWj9zSZEt9UDw1GYD7
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 280988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json
            external_identifier: CBDB:280988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_81mAseS3CFXdvRKMwPm7Re
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
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
        - id: cs_u8LRcFugDjDFf8P1DsYV9T
          claim_id: c_81mAseS3CFXdvRKMwPm7Re
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
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
        id: c_-R72gV9C361EQCzsADpPrG
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8Wb7itaolHGz1EDWLiAcx
          claim_id: c_-R72gV9C361EQCzsADpPrG
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJXudkaLuCHVbmiCeKBv45
        status: active
        display_name: 王官
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文進 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XJXudkaLuCHVbmiCeKBv45 | 王官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文進（CBDB 280988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json)
