---
schema: wang-person/v1
id: p_Gthbd71keeHPBWip3JDpHk
status: active
merged_into: null
display_name: 王皆
cbdb_id: 22012
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y3xbSBKjeTnFLuyk7j5nsW
        subject_person_id: p_Gthbd71keeHPBWip3JDpHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皆，宋人物。籍贯當塗，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 22012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TdikmtmqXgWPot5bMuY3YG
          claim_id: c_y3xbSBKjeTnFLuyk7j5nsW
          source_id: s_7AgQMKpRTgiRwnPfJPNtXj
          stance: supports
          locator: CBDB:22012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7AgQMKpRTgiRwnPfJPNtXj
            source_type: api_record
            title: 中国历代人物传记资料库：王皆（CBDB 22012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22012&o=json
            external_identifier: CBDB:22012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wJ495XDq6LHBBeeiMZjtYm
        subject_person_id: p_Gthbd71keeHPBWip3JDpHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BfuhCHhFY8Bkqwj2iAttPU
          claim_id: c_wJ495XDq6LHBBeeiMZjtYm
          source_id: s_7AgQMKpRTgiRwnPfJPNtXj
          stance: supports
          locator: CBDB:22012
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VaiKaDqTUTzyK2oLm1tXAA
        subject_person_id: p_B8ga7F2MNvRvYqoPDeiZMF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gthbd71keeHPBWip3JDpHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnRUJ00aWMa4QmW23aQkz9
          claim_id: c_VaiKaDqTUTzyK2oLm1tXAA
          source_id: s_Lq2TRJGL6oVAj4QXBdB8KP
          stance: supports
          locator: CBDB 双向互证（子 王皆 ⇄ 父 王延嗣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Lq2TRJGL6oVAj4QXBdB8KP
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 22011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22011&o=json
            external_identifier: CBDB:22011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B8ga7F2MNvRvYqoPDeiZMF
        status: active
        display_name: 王延嗣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王皆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王皆，宋人物。籍贯當塗，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 22012） | accepted |
| name.primary | 王皆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B8ga7F2MNvRvYqoPDeiZMF | 王延嗣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王皆（CBDB 22012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22012&o=json)
- [中国历代人物传记资料库：王延嗣（CBDB 22011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22011&o=json)
