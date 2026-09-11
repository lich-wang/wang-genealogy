---
schema: wang-person/v1
id: p_tNfmwoyANx9nezKhR7v9kd
status: active
merged_into: null
display_name: 王有齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7PyqVvCGouowB8RoLA9qv3
        subject_person_id: p_tNfmwoyANx9nezKhR7v9kd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rdaMj6J9gh776URRUPNMaz
          claim_id: c_7PyqVvCGouowB8RoLA9qv3
          source_id: s_6a7u9LuQC78yGFU1fk4tar
          stance: supports
          locator: CBDB:561405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561405）
          source: &a1
            id: s_6a7u9LuQC78yGFU1fk4tar
            source_type: api_record
            title: 中国历代人物传记资料库：王有齡（CBDB 561405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561405&o=json
            external_identifier: CBDB:561405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_91ab16Zz8a4yKV2ABMFQEV
        subject_person_id: p_tNfmwoyANx9nezKhR7v9kd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqzWMEM4h1JnDyi1oWuMEG
          claim_id: c_91ab16Zz8a4yKV2ABMFQEV
          source_id: s_6a7u9LuQC78yGFU1fk4tar
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CbWc1a4JMD47312JiKwT0T
        subject_person_id: p_tNfmwoyANx9nezKhR7v9kd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nPz99hVum6snahNzUGDMZi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wFFVCoHePhU7f7ayWXY73
          claim_id: c_CbWc1a4JMD47312JiKwT0T
          source_id: s_YqOMpIUlVNh5EsX97w0SHV
          stance: supports
          locator: 南陽府志，lgid=878855：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YqOMpIUlVNh5EsX97w0SHV
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王有齡妻)（CBDB 561406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561406&o=json
            external_identifier: CBDB:561406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nPz99hVum6snahNzUGDMZi
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王有齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有齡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nPz99hVum6snahNzUGDMZi | 曹氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王有齡妻)（CBDB 561406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561406&o=json)
- [中国历代人物传记资料库：王有齡（CBDB 561405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561405&o=json)
