---
schema: wang-person/v1
id: p_zF9b6MVnyJgFHUvPvKqRU3
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 37789
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mnPpFiOBAarvK7UTaQkgp4
        subject_person_id: p_zF9b6MVnyJgFHUvPvKqRU3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__IFgOkHaZPqhBNa0v5a8Cy
          claim_id: c_mnPpFiOBAarvK7UTaQkgp4
          source_id: s_5koCWdZQ26PjfayGfba3ey
          stance: supports
          locator: CBDB:37789
          quotation: null
          interpretation_note: CBDB 明确记录的王永配偶
          source: &a1
            id: s_5koCWdZQ26PjfayGfba3ey
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王忠立母)（CBDB 37789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37789&o=json
            external_identifier: CBDB:37789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__YHImL035v-yzsZUgNqlmK
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zF9b6MVnyJgFHUvPvKqRU3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fqv2a-VTM0z1C-lH0-OTMH
          claim_id: c__YHImL035v-yzsZUgNqlmK
          source_id: s_5koCWdZQ26PjfayGfba3ey
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HqotrCmsQrKUu6nT3a74CK
        status: active
        display_name: 王永
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HqotrCmsQrKUu6nT3a74CK | 王永 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王忠立母)（CBDB 37789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37789&o=json)
