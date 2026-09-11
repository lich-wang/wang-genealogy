---
schema: wang-person/v1
id: p_bGprsLrDkQCZ7mEuo3nL9T
status: active
merged_into: null
display_name: 王登樓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NbXEFxxwKrbEKca7yEuBAw
        subject_person_id: p_bGprsLrDkQCZ7mEuo3nL9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登樓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7zfTRFrL9fcM7C5YmywhC
          claim_id: c_NbXEFxxwKrbEKca7yEuBAw
          source_id: s_uxbRdW3CGL4MGwGZhnbECt
          stance: supports
          locator: CBDB:639506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639506）
          source: &a1
            id: s_uxbRdW3CGL4MGwGZhnbECt
            source_type: api_record
            title: 中国历代人物传记资料库：王登樓（CBDB 639506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639506&o=json
            external_identifier: CBDB:639506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQp4X7Q6n4aMjVvPC364xk
        subject_person_id: p_bGprsLrDkQCZ7mEuo3nL9T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王登樓，清人物。籍贯南安，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 639506）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sr1V40wVNht_1m6yNv6zlG
          claim_id: c_FQp4X7Q6n4aMjVvPC364xk
          source_id: s_uxbRdW3CGL4MGwGZhnbECt
          stance: supports
          locator: CBDB:639506
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

# 王登樓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登樓 | accepted |
| bio.summary | 王登樓，清人物。籍贯南安，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 639506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登樓（CBDB 639506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639506&o=json)
