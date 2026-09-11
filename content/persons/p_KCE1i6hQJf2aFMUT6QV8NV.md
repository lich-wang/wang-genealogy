---
schema: wang-person/v1
id: p_KCE1i6hQJf2aFMUT6QV8NV
status: active
merged_into: null
display_name: 王光國
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xSCuAoo1LM7bQ5FsG7Yu6K
        subject_person_id: p_KCE1i6hQJf2aFMUT6QV8NV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Df6GjGzwG1z597MXkPybNU
          claim_id: c_xSCuAoo1LM7bQ5FsG7Yu6K
          source_id: s_CwZdAvK91w2mzQTvQHeYdR
          stance: supports
          locator: CBDB:26619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26619）
          source: &a1
            id: s_CwZdAvK91w2mzQTvQHeYdR
            source_type: api_record
            title: 中国历代人物传记资料库：王光國（CBDB 26619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26619&o=json
            external_identifier: CBDB:26619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o49Gt96V72Ba1avMQ7Am7G
        subject_person_id: p_KCE1i6hQJf2aFMUT6QV8NV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光國，宋人物。籍贯常山。（中国历代人物传记资料库 CBDB 26619）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D4U0InPe7bDew1SNuP9nYv
          claim_id: c_o49Gt96V72Ba1avMQ7Am7G
          source_id: s_CwZdAvK91w2mzQTvQHeYdR
          stance: supports
          locator: CBDB:26619
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
  ancestors:
    - claim:
        id: c_NIPPrdLzhrysHQ8BazSUaz
        subject_person_id: p_BLnE9nncUpXkxeyUSBMut9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KCE1i6hQJf2aFMUT6QV8NV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QmMRub8G3WdtEXP_zYz6Ys
          claim_id: c_NIPPrdLzhrysHQ8BazSUaz
          source_id: s_CwZdAvK91w2mzQTvQHeYdR
          stance: supports
          locator: CBDB 双向互证（祖父 王漢之 ⇄ 孫 王光國）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_BLnE9nncUpXkxeyUSBMut9
        status: active
        display_name: 王漢之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王光國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光國 | accepted |
| bio.summary | 王光國，宋人物。籍贯常山。（中国历代人物传记资料库 CBDB 26619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BLnE9nncUpXkxeyUSBMut9 | 王漢之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光國（CBDB 26619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26619&o=json)
