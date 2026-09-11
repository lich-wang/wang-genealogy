---
schema: wang-person/v1
id: p_aa3RNbgBfwH3fCXX88Xph2
status: active
merged_into: null
display_name: 王本昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U9YH8FqnuR1VPNRMQSuGXP
        subject_person_id: p_aa3RNbgBfwH3fCXX88Xph2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6BbhkoYdr1uhkTVSXxpnk
          claim_id: c_U9YH8FqnuR1VPNRMQSuGXP
          source_id: s_FHBbnKLVTxT4KM9oPDgyCf
          stance: supports
          locator: CBDB:638658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638658）
          source: &a1
            id: s_FHBbnKLVTxT4KM9oPDgyCf
            source_type: api_record
            title: 中国历代人物传记资料库：王本昭（CBDB 638658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638658&o=json
            external_identifier: CBDB:638658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_An6ZNvhmoyhErdtsGn1pDK
        subject_person_id: p_aa3RNbgBfwH3fCXX88Xph2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本昭，清人物。籍贯武平，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 638658）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9X7j-DCTmhSK3DYbAytWVM
          claim_id: c_An6ZNvhmoyhErdtsGn1pDK
          source_id: s_FHBbnKLVTxT4KM9oPDgyCf
          stance: supports
          locator: CBDB:638658
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

# 王本昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本昭 | accepted |
| bio.summary | 王本昭，清人物。籍贯武平，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 638658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本昭（CBDB 638658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638658&o=json)
