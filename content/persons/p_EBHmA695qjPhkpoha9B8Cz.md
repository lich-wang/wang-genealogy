---
schema: wang-person/v1
id: p_EBHmA695qjPhkpoha9B8Cz
status: active
merged_into: null
display_name: 王柱衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PiK7JXCRhesokC6fsv8TPE
        subject_person_id: p_EBHmA695qjPhkpoha9B8Cz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nb2t9JsGZGid5NgyftiCWp
          claim_id: c_PiK7JXCRhesokC6fsv8TPE
          source_id: s_vc6kk8dVL3ocG2bfbGyFqR
          stance: supports
          locator: CBDB:638703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638703）
          source: &a1
            id: s_vc6kk8dVL3ocG2bfbGyFqR
            source_type: api_record
            title: 中国历代人物传记资料库：王柱衡（CBDB 638703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638703&o=json
            external_identifier: CBDB:638703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9WjPaPkW6HgFYk9ohC1cH
        subject_person_id: p_EBHmA695qjPhkpoha9B8Cz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱衡，清人物。籍贯松潘直隸廳，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G2vwZ3TPo3Ec8SDjo3KDUQ
          claim_id: c_F9WjPaPkW6HgFYk9ohC1cH
          source_id: s_vc6kk8dVL3ocG2bfbGyFqR
          stance: supports
          locator: CBDB:638703
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

# 王柱衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柱衡 | accepted |
| bio.summary | 王柱衡，清人物。籍贯松潘直隸廳，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柱衡（CBDB 638703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638703&o=json)
