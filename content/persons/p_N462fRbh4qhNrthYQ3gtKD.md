---
schema: wang-person/v1
id: p_N462fRbh4qhNrthYQ3gtKD
status: active
merged_into: null
display_name: 傅氏
revision: 1
cbdb_id: 386583
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_keZq5zYhUUS9td5ecIvZVT
        subject_person_id: p_N462fRbh4qhNrthYQ3gtKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 傅氏，元人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386583）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtGI_U2PxRo2lAX457m3oH
          claim_id: c_keZq5zYhUUS9td5ecIvZVT
          source_id: s_2-w66EVzTSKBwRc3NKDjpm
          stance: supports
          locator: CBDB:386583
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2-w66EVzTSKBwRc3NKDjpm
            source_type: api_record
            title: 中国历代人物传记资料库：傅氏(王炎澤妻)（CBDB 386583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386583&o=json
            external_identifier: CBDB:386583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fbBA0UPfVj7HmiAw2QVrZ-
        subject_person_id: p_N462fRbh4qhNrthYQ3gtKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 傅氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-Aa0DoCMaqVz1ZLtM20JC
          claim_id: c_fbBA0UPfVj7HmiAw2QVrZ-
          source_id: s_2-w66EVzTSKBwRc3NKDjpm
          stance: supports
          locator: CBDB:386583
          quotation: null
          interpretation_note: CBDB 明确记录的王炎澤配偶
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
        id: c_jphUglkZasNi-EanZYqLJ4
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N462fRbh4qhNrthYQ3gtKD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X9aNeY6bkOkF-8ljpXT3h9
          claim_id: c_jphUglkZasNi-EanZYqLJ4
          source_id: s_2-w66EVzTSKBwRc3NKDjpm
          stance: supports
          locator: CBDB 双向互证（妻子 傅氏(王炎澤妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mp9fqPLVqRaYj9MBorGs2H
        status: active
        display_name: 王炎澤
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 傅氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 傅氏，元人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386583） | accepted |
| name.primary | 傅氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mp9fqPLVqRaYj9MBorGs2H | 王炎澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：傅氏(王炎澤妻)（CBDB 386583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386583&o=json)
