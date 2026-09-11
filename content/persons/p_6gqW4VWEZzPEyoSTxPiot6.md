---
schema: wang-person/v1
id: p_6gqW4VWEZzPEyoSTxPiot6
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 703989
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZKQD0toeVBBH09W88CUhWT
        subject_person_id: p_6gqW4VWEZzPEyoSTxPiot6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AFPzH7-NZCpZWFgpypS7yZ
          claim_id: c_ZKQD0toeVBBH09W88CUhWT
          source_id: s_BD9ZkE_z3Z_eFiwsh6sim7
          stance: supports
          locator: CBDB:703989
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BD9ZkE_z3Z_eFiwsh6sim7
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王運溪妻)（CBDB 703989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703989&o=json
            external_identifier: CBDB:703989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A7vi4bOuG02qe3ZDhflqk_
        subject_person_id: p_6gqW4VWEZzPEyoSTxPiot6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVoiE0vgpocYRnyMmw23W2
          claim_id: c_A7vi4bOuG02qe3ZDhflqk_
          source_id: s_BD9ZkE_z3Z_eFiwsh6sim7
          stance: supports
          locator: CBDB:703989
          quotation: null
          interpretation_note: CBDB 明确记录的王運溪配偶
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
        id: c_STMMJSobcNiyvTsPpSiSaI
        subject_person_id: p_9XEdGwbtKfbYJcM1fkjEgY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6gqW4VWEZzPEyoSTxPiot6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WZSG07xkvz8oQMzvbjNKsL
          claim_id: c_STMMJSobcNiyvTsPpSiSaI
          source_id: s_BD9ZkE_z3Z_eFiwsh6sim7
          stance: supports
          locator: 平陰縣志，lgid=630890：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9XEdGwbtKfbYJcM1fkjEgY
        status: active
        display_name: 王運溪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703989） | accepted |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9XEdGwbtKfbYJcM1fkjEgY | 王運溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王運溪妻)（CBDB 703989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703989&o=json)
