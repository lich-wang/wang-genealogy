---
schema: wang-person/v1
id: p_jjq3btaFrJbp49azY8XtZa
status: active
merged_into: null
display_name: 馮氏
revision: 1
cbdb_id: 556187
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BNYAFlkn4HgaOLxnYUTR_Q
        subject_person_id: p_jjq3btaFrJbp49azY8XtZa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZ4SjuiKFlug4YWic54o7f
          claim_id: c_BNYAFlkn4HgaOLxnYUTR_Q
          source_id: s_ZXb62UGm4TjUJMWOq1z2EJ
          stance: supports
          locator: CBDB:556187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZXb62UGm4TjUJMWOq1z2EJ
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王魁妻)（CBDB 556187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556187&o=json
            external_identifier: CBDB:556187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-73aTXynqF0lCMQbSZ-sgw
        subject_person_id: p_jjq3btaFrJbp49azY8XtZa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfSKFsXY59AFvAbheXQf8K
          claim_id: c_-73aTXynqF0lCMQbSZ-sgw
          source_id: s_ZXb62UGm4TjUJMWOq1z2EJ
          stance: supports
          locator: CBDB:556187
          quotation: null
          interpretation_note: CBDB 明确记录的王魁配偶
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
        id: c_hW314RqYt6un5my4tQEeua
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jjq3btaFrJbp49azY8XtZa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTDcRc7CMOeqAJ4PWvPFgT
          claim_id: c_hW314RqYt6un5my4tQEeua
          source_id: s_ZXb62UGm4TjUJMWOq1z2EJ
          stance: supports
          locator: 南陽府志，lgid=878719：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        status: active
        display_name: 王魁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馮氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 馮氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556187） | accepted |
| name.primary | 馮氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QhBrV8qpDJ7Xaiqs2rrSJ2 | 王魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王魁妻)（CBDB 556187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556187&o=json)
