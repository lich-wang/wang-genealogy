---
schema: wang-person/v1
id: p_K8PCCktUckGkJGwiDHGjzh
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 322919
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdNUdo6oCMm3YeK-ScKpOQ
        subject_person_id: p_K8PCCktUckGkJGwiDHGjzh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jf6VQhrhDx5lUI6IUlc2XN
          claim_id: c_wdNUdo6oCMm3YeK-ScKpOQ
          source_id: s_T-wyj4Nmkktkblll0xQ1TI
          stance: supports
          locator: CBDB:322919
          quotation: null
          interpretation_note: CBDB 明确记录的王霽配偶
          source: &a1
            id: s_T-wyj4Nmkktkblll0xQ1TI
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王霽妻)（CBDB 322919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322919&o=json
            external_identifier: CBDB:322919
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
        id: c_iHmx6SecX27XfTNZiQe1VR
        subject_person_id: p_fngUDbgD5w2bFevKYCEogv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K8PCCktUckGkJGwiDHGjzh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Crm9_fM_k71eDy0TNpVDza
          claim_id: c_iHmx6SecX27XfTNZiQe1VR
          source_id: s_T-wyj4Nmkktkblll0xQ1TI
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fngUDbgD5w2bFevKYCEogv
        status: active
        display_name: 王霽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fngUDbgD5w2bFevKYCEogv | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王霽妻)（CBDB 322919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322919&o=json)
