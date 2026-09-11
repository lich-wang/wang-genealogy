---
schema: wang-person/v1
id: p_g5mT7P39HaRU9KGzPQs1JP
status: active
merged_into: null
display_name: 王先橒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vAaFC5XN1j6qUZDkCPAn9j
        subject_person_id: p_g5mT7P39HaRU9KGzPQs1JP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先橒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bHUG8y7vMBF8C312bLboHD
          claim_id: c_vAaFC5XN1j6qUZDkCPAn9j
          source_id: s_hFc3jTte8YtuPhEt3Kr2tV
          stance: supports
          locator: CBDB:636234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636234）
          source: &a1
            id: s_hFc3jTte8YtuPhEt3Kr2tV
            source_type: api_record
            title: 中国历代人物传记资料库：王先橒（CBDB 636234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636234&o=json
            external_identifier: CBDB:636234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1vrYfhZgX9zhDjrfnyQqUS
        subject_person_id: p_g5mT7P39HaRU9KGzPQs1JP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王先橒，清人物。籍贯潼川府，入仕監生: 例監(附監生)，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 636234）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hp4FKLCUTRiopCuMXnZPz-
          claim_id: c_1vrYfhZgX9zhDjrfnyQqUS
          source_id: s_hFc3jTte8YtuPhEt3Kr2tV
          stance: supports
          locator: CBDB:636234
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

# 王先橒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先橒 | accepted |
| bio.summary | 王先橒，清人物。籍贯潼川府，入仕監生: 例監(附監生)，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 636234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先橒（CBDB 636234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636234&o=json)
