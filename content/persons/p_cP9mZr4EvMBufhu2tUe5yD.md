---
schema: wang-person/v1
id: p_cP9mZr4EvMBufhu2tUe5yD
status: active
merged_into: null
display_name: 王廷魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rcwsPW2LxwRybXH8odp46s
        subject_person_id: p_cP9mZr4EvMBufhu2tUe5yD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KvJXKrRkJSAuUMmJgfRz9M
          claim_id: c_rcwsPW2LxwRybXH8odp46s
          source_id: s_4zmpbkd5wS7F3Fi9fkAppZ
          stance: supports
          locator: CBDB:701815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701815）
          source: &a1
            id: s_4zmpbkd5wS7F3Fi9fkAppZ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷魁（CBDB 701815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701815&o=json
            external_identifier: CBDB:701815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sXsioUVgWhiSz6gxSxfjXa
        subject_person_id: p_cP9mZr4EvMBufhu2tUe5yD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王廷魁，清人物。籍贯吳縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701815）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pymAMddql9H1Y838zxdyny
          claim_id: c_sXsioUVgWhiSz6gxSxfjXa
          source_id: s_4zmpbkd5wS7F3Fi9fkAppZ
          stance: supports
          locator: CBDB:701815
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

# 王廷魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷魁 | accepted |
| bio.summary | 王廷魁，清人物。籍贯吳縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷魁（CBDB 701815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701815&o=json)
