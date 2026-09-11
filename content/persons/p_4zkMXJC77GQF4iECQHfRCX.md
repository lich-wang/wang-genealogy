---
schema: wang-person/v1
id: p_4zkMXJC77GQF4iECQHfRCX
status: active
merged_into: null
display_name: 王圭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fD46WmrJKbNvvna6tt5LAa
        subject_person_id: p_4zkMXJC77GQF4iECQHfRCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SEMsL8oUD271kQwrwZHc8J
          claim_id: c_fD46WmrJKbNvvna6tt5LAa
          source_id: s_erTcNMMso2MVXZsUKE31en
          stance: supports
          locator: CBDB:699638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699638）
          source: &a1
            id: s_erTcNMMso2MVXZsUKE31en
            source_type: api_record
            title: 中国历代人物传记资料库：王圭（CBDB 699638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699638&o=json
            external_identifier: CBDB:699638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHhdXpdFvk3BFsUQQ16CNo
        subject_person_id: p_4zkMXJC77GQF4iECQHfRCX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭，宋人物。曾任提舉在京諸司、朝請大夫、集禧觀使。（中国历代人物传记资料库 CBDB 699638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_viQcdQ28fHe4FNyALjw6MK
          claim_id: c_CHhdXpdFvk3BFsUQQ16CNo
          source_id: s_erTcNMMso2MVXZsUKE31en
          stance: supports
          locator: CBDB:699638
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

# 王圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圭 | accepted |
| bio.summary | 王圭，宋人物。曾任提舉在京諸司、朝請大夫、集禧觀使。（中国历代人物传记资料库 CBDB 699638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王圭（CBDB 699638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699638&o=json)
