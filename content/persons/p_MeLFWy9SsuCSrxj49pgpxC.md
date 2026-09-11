---
schema: wang-person/v1
id: p_MeLFWy9SsuCSrxj49pgpxC
status: active
merged_into: null
display_name: 王莆孫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FbhRRLp84mNFCzF8w9GXX
        subject_person_id: p_MeLFWy9SsuCSrxj49pgpxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莆孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tYYjHTf3MQ7N2HvyzonoX3
          claim_id: c_2FbhRRLp84mNFCzF8w9GXX
          source_id: s_GuNnnDe61HZJf5TP1qdk62
          stance: supports
          locator: CBDB:640093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640093）
          source: &a1
            id: s_GuNnnDe61HZJf5TP1qdk62
            source_type: api_record
            title: 中国历代人物传记资料库：王莆孫（CBDB 640093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640093&o=json
            external_identifier: CBDB:640093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6oRpNpbDdU5WMogsM9NnQW
        subject_person_id: p_MeLFWy9SsuCSrxj49pgpxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莆孫，清人物。籍贯中衛，曾任典史。（中国历代人物传记资料库 CBDB 640093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vcvYedXCVrHLDk3IOvNVmb
          claim_id: c_6oRpNpbDdU5WMogsM9NnQW
          source_id: s_GuNnnDe61HZJf5TP1qdk62
          stance: supports
          locator: CBDB:640093
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
  descendants: []
  other: []
---

# 王莆孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莆孫 | accepted |
| bio.summary | 王莆孫，清人物。籍贯中衛，曾任典史。（中国历代人物传记资料库 CBDB 640093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莆孫（CBDB 640093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640093&o=json)
