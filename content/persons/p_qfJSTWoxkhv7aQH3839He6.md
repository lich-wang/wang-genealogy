---
schema: wang-person/v1
id: p_qfJSTWoxkhv7aQH3839He6
status: active
merged_into: null
display_name: 王惟忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkiLQ3AMYJPRE4a1mTm924
        subject_person_id: p_qfJSTWoxkhv7aQH3839He6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqsoML9AYZtFPRL1jXzGq3
          claim_id: c_tkiLQ3AMYJPRE4a1mTm924
          source_id: s_szwq2fnD4mZ9YzTnL9gizp
          stance: supports
          locator: CBDB:19888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19888）
          source: &a1
            id: s_szwq2fnD4mZ9YzTnL9gizp
            source_type: api_record
            title: 中国历代人物传记资料库：王惟忠（CBDB 19888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19888&o=json
            external_identifier: CBDB:19888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Mk7UGcN5AecdKstH5cJ4zk
        subject_person_id: p_qfJSTWoxkhv7aQH3839He6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1254年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHKVNPaQ373PkHMinhp9sd
          claim_id: c_Mk7UGcN5AecdKstH5cJ4zk
          source_id: s_szwq2fnD4mZ9YzTnL9gizp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rSqgrteZ7iYUQc7cxcF8L2
        subject_person_id: p_qfJSTWoxkhv7aQH3839He6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟忠（卒于1254年），宋人物。籍贯鄞縣，入仕進士，曾任安撫使、群牧制置使。（中国历代人物传记资料库 CBDB 19888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ia1upfCgjzgrp7-6z0Qdtv
          claim_id: c_rSqgrteZ7iYUQc7cxcF8L2
          source_id: s_szwq2fnD4mZ9YzTnL9gizp
          stance: supports
          locator: CBDB:19888
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
        id: c_OWuvxVakknQ2BI008KzrYl
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qfJSTWoxkhv7aQH3839He6
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2tnngDIAfKJ3ggrUrWuLM3
          claim_id: c_OWuvxVakknQ2BI008KzrYl
          source_id: s_szwq2fnD4mZ9YzTnL9gizp
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王勳 ⇄ 玄孫;四世孫 王惟忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_LMN8U3w7r8FiSU2N778GMc
        status: active
        display_name: 王勳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟忠 | accepted |
| death.date | 1254年 | accepted |
| bio.summary | 王惟忠（卒于1254年），宋人物。籍贯鄞縣，入仕進士，曾任安撫使、群牧制置使。（中国历代人物传记资料库 CBDB 19888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LMN8U3w7r8FiSU2N778GMc | 王勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟忠（CBDB 19888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19888&o=json)
