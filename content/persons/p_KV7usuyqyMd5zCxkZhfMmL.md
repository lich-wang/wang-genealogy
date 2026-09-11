---
schema: wang-person/v1
id: p_KV7usuyqyMd5zCxkZhfMmL
status: active
merged_into: null
display_name: 吳氏
revision: 1
cbdb_id: 38573
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__tWSVqhD56ZGcxqXIcpCpq
        subject_person_id: p_KV7usuyqyMd5zCxkZhfMmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A-BeIRmgwyLdCFDlF_9nV3
          claim_id: c__tWSVqhD56ZGcxqXIcpCpq
          source_id: s_6iuiLUX9D_9JpSe_7Cs52N
          stance: supports
          locator: CBDB:38573
          quotation: null
          interpretation_note: CBDB 明确记录的王异配偶
          source: &a1
            id: s_6iuiLUX9D_9JpSe_7Cs52N
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王异妻)（CBDB 38573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38573&o=json
            external_identifier: CBDB:38573
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
        id: c_SfQ11BQhCrQMB9XVAqjwZ7
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KV7usuyqyMd5zCxkZhfMmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFWYtsT-i3lZatRvUbYKjn
          claim_id: c_SfQ11BQhCrQMB9XVAqjwZ7
          source_id: s_6iuiLUX9D_9JpSe_7Cs52N
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳氏(王异妻)（CBDB 38573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38573&o=json)
