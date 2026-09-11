---
schema: wang-person/v1
id: p_1xofn6UHzGPoqgEhFfUDGW
status: active
merged_into: null
display_name: 王均
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bkfRLuynYUzqiJk5cLkGYe
        subject_person_id: p_1xofn6UHzGPoqgEhFfUDGW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Y9f2NY7kDG6rwMzDnjxhz
          claim_id: c_bkfRLuynYUzqiJk5cLkGYe
          source_id: s_LhLjpL5wVMo8NBzKL7eqEg
          stance: supports
          locator: CBDB:700303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700303）
          source: &a1
            id: s_LhLjpL5wVMo8NBzKL7eqEg
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 700303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700303&o=json
            external_identifier: CBDB:700303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YtpMeSsWoqYkJy6G2CH9Ym
        subject_person_id: p_1xofn6UHzGPoqgEhFfUDGW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均，明人物。籍贯錢塘，身份为拒絕出仕、孝子/孝女，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 700303）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FzwOEYvfb-aQsB37i2ZSr1
          claim_id: c_YtpMeSsWoqYkJy6G2CH9Ym
          source_id: s_LhLjpL5wVMo8NBzKL7eqEg
          stance: supports
          locator: CBDB:700303
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QC1EqEEm7DJKgIIVGRW5MT
        subject_person_id: p_Kgv5GqFNcLGvJNB7gg1h8u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1xofn6UHzGPoqgEhFfUDGW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bQPEGBBK-iU3QKCRXXdY1m
          claim_id: c_QC1EqEEm7DJKgIIVGRW5MT
          source_id: s_LhLjpL5wVMo8NBzKL7eqEg
          stance: supports
          locator: 錢塘縣志，lgid=219720：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kgv5GqFNcLGvJNB7gg1h8u
        status: active
        display_name: 王道焜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均 | accepted |
| bio.summary | 王均，明人物。籍贯錢塘，身份为拒絕出仕、孝子/孝女，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 700303） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kgv5GqFNcLGvJNB7gg1h8u | 王道焜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均（CBDB 700303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700303&o=json)
