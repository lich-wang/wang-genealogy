---
schema: wang-person/v1
id: p_W7v2sz7ivBM4qDKYYZHGia
status: active
merged_into: null
display_name: 王家傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfT58Gp1LzLAYioeACxLdt
        subject_person_id: p_W7v2sz7ivBM4qDKYYZHGia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4TRDWT6UNDzKfsD9FY6Axh
          claim_id: c_MfT58Gp1LzLAYioeACxLdt
          source_id: s_gBp3NcsJufxKcQHx318peA
          stance: supports
          locator: CBDB:637164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637164）
          source: &a1
            id: s_gBp3NcsJufxKcQHx318peA
            source_type: api_record
            title: 中国历代人物传记资料库：王家傑（CBDB 637164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637164&o=json
            external_identifier: CBDB:637164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nh4egKWx8WVxdG767NerHG
        subject_person_id: p_W7v2sz7ivBM4qDKYYZHGia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家傑，清人物。籍贯平江，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ei3yU6m4X4a-SkrX4HEB7p
          claim_id: c_nh4egKWx8WVxdG767NerHG
          source_id: s_gBp3NcsJufxKcQHx318peA
          stance: supports
          locator: CBDB:637164
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

# 王家傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家傑 | accepted |
| bio.summary | 王家傑，清人物。籍贯平江，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家傑（CBDB 637164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637164&o=json)
