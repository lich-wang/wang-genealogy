---
schema: wang-person/v1
id: p_rGEUuCN5FyQqEMPyhSJxrh
status: active
merged_into: null
display_name: 王麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_senwfKFw5VgBdxSJ7bxXiZ
        subject_person_id: p_rGEUuCN5FyQqEMPyhSJxrh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w42kDvf1Z8b9pCp4DU2bRy
          claim_id: c_senwfKFw5VgBdxSJ7bxXiZ
          source_id: s_L2fLrf4SZR3RFd1i2AMBKG
          stance: supports
          locator: CBDB:688868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688868）
          source: &a1
            id: s_L2fLrf4SZR3RFd1i2AMBKG
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 688868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688868&o=json
            external_identifier: CBDB:688868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUU2HwaU4bwQG8dS6VdaLd
        subject_person_id: p_rGEUuCN5FyQqEMPyhSJxrh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 688868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rpMlig0ACL-2UJaq3lQ-K4
          claim_id: c_UUU2HwaU4bwQG8dS6VdaLd
          source_id: s_L2fLrf4SZR3RFd1i2AMBKG
          stance: supports
          locator: CBDB:688868
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

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 688868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 688868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688868&o=json)
