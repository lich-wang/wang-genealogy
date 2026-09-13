---
schema: wang-person/v1
id: p_NhTEbSVmYgtCzpciTRQqHZ
status: active
merged_into: null
display_name: 王昭懿
cbdb_id: 21982
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfkNKR91yB1ThJYiLnX6qa
        subject_person_id: p_NhTEbSVmYgtCzpciTRQqHZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭懿（生于944年），宋人物。籍贯阜城。（中国历代人物传记资料库 CBDB 21982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OPnOjTiw8COqFes-rfAUoQ
          claim_id: c_FfkNKR91yB1ThJYiLnX6qa
          source_id: s_81aD1iZ29n9CRAv2jeLYXd
          stance: supports
          locator: CBDB:21982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_81aD1iZ29n9CRAv2jeLYXd
            source_type: api_record
            title: 中国历代人物传记资料库：王昭懿（CBDB 21982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21982&o=json
            external_identifier: CBDB:21982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Mv3JNFtDz9xnJRf27T9xvV
        subject_person_id: p_NhTEbSVmYgtCzpciTRQqHZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 944年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 0944-01-01
            latest: 0944-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MdqxqPyQe7mh9D7pUran3d
          claim_id: c_Mv3JNFtDz9xnJRf27T9xvV
          source_id: s_81aD1iZ29n9CRAv2jeLYXd
          stance: supports
          locator: CBDB:21982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 944
          source:
            id: s_81aD1iZ29n9CRAv2jeLYXd
            source_type: api_record
            title: 中国历代人物传记资料库：王昭懿（CBDB 21982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21982&o=json
            external_identifier: CBDB:21982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wbjEy5tc3F4ozMFx382v8
        subject_person_id: p_NhTEbSVmYgtCzpciTRQqHZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭懿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qATFkGkPN4w5ygN2HvZ3gv
          claim_id: c_6wbjEy5tc3F4ozMFx382v8
          source_id: s_81aD1iZ29n9CRAv2jeLYXd
          stance: supports
          locator: CBDB:21982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 944
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aioam7VYRUbTwZK4OGrzKT
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NhTEbSVmYgtCzpciTRQqHZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HILBHJx2vST2AEHouY1dDW
          claim_id: c_aioam7VYRUbTwZK4OGrzKT
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
          stance: supports
          locator: CBDB 双向互证（子 王昭懿 ⇄ 父 王繼昇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_uC4WJXKbFJAC7KghSUo3CJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昇（CBDB 1780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json
            external_identifier: CBDB:1780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KdcqPruLqAjHwvyr7gXGsW
        status: active
        display_name: 王繼昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭懿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭懿（生于944年），宋人物。籍贯阜城。（中国历代人物传记资料库 CBDB 21982） | accepted |
| birth.date | 944年 | accepted |
| name.primary | 王昭懿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KdcqPruLqAjHwvyr7gXGsW | 王繼昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼昇（CBDB 1780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json)
- [中国历代人物传记资料库：王昭懿（CBDB 21982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21982&o=json)
