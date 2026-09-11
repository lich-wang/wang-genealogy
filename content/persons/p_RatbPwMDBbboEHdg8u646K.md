---
schema: wang-person/v1
id: p_RatbPwMDBbboEHdg8u646K
status: active
merged_into: null
display_name: 王漸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSNFXy64DKCe4nmuGb8YjR
        subject_person_id: p_RatbPwMDBbboEHdg8u646K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GmZmufU56pgP9iQGf1wPnd
          claim_id: c_dSNFXy64DKCe4nmuGb8YjR
          source_id: s_MNM9k5N1kEvg38EryMCtUb
          stance: supports
          locator: CBDB:45886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45886）
          source: &a1
            id: s_MNM9k5N1kEvg38EryMCtUb
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 45886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45886&o=json
            external_identifier: CBDB:45886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCp4mFYGwLVZGwK8nCTQZj
        subject_person_id: p_RatbPwMDBbboEHdg8u646K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸，宋人物。籍贯長社，曾任將作監主簿、少府監監。（中国历代人物传记资料库 CBDB 45886）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Zal8wWYolQ1CNhFGfrY90
          claim_id: c_zCp4mFYGwLVZGwK8nCTQZj
          source_id: s_MNM9k5N1kEvg38EryMCtUb
          stance: supports
          locator: CBDB:45886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EgguUDg7O31btE7E4idU9C
        subject_person_id: p_z7LkGQFqAnJBP7Qa5qDyZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RatbPwMDBbboEHdg8u646K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZVwyu-dy-ovwIOiph2q6-
          claim_id: c_EgguUDg7O31btE7E4idU9C
          source_id: s_MNM9k5N1kEvg38EryMCtUb
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1393;1394：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z7LkGQFqAnJBP7Qa5qDyZH
        status: active
        display_name: 王山民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王漸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸 | accepted |
| bio.summary | 王漸，宋人物。籍贯長社，曾任將作監主簿、少府監監。（中国历代人物传记资料库 CBDB 45886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z7LkGQFqAnJBP7Qa5qDyZH | 王山民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸（CBDB 45886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45886&o=json)
