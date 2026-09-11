---
schema: wang-person/v1
id: p_8TTMD56g2ZGvnCiWKCzLAb
status: active
merged_into: null
display_name: 王敬烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GsFUGuqn64bLA66zSPC1w6
        subject_person_id: p_8TTMD56g2ZGvnCiWKCzLAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mA9LNusbG7J3EHnd6aYLfJ
          claim_id: c_GsFUGuqn64bLA66zSPC1w6
          source_id: s_KBmfaWhx7J2FUMK5gyEkoQ
          stance: supports
          locator: CBDB:638199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638199）
          source: &a1
            id: s_KBmfaWhx7J2FUMK5gyEkoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬烈（CBDB 638199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638199&o=json
            external_identifier: CBDB:638199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57KM8VbZXBM8G6rq3MwY55
        subject_person_id: p_8TTMD56g2ZGvnCiWKCzLAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬烈，清人物。籍贯青縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P7XkkI-t0n_AxUJWbVmDf8
          claim_id: c_57KM8VbZXBM8G6rq3MwY55
          source_id: s_KBmfaWhx7J2FUMK5gyEkoQ
          stance: supports
          locator: CBDB:638199
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

# 王敬烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬烈 | accepted |
| bio.summary | 王敬烈，清人物。籍贯青縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638199） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬烈（CBDB 638199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638199&o=json)
