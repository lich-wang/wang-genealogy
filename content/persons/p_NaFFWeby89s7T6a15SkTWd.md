---
schema: wang-person/v1
id: p_NaFFWeby89s7T6a15SkTWd
status: active
merged_into: null
display_name: 王德純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2KYHt9AZtz1cvt3whUXAdc
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sC2Ean6r8WnsMz93burAJs
          claim_id: c_2KYHt9AZtz1cvt3whUXAdc
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: CBDB:213939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213939）
          source: &a1
            id: s_3GogRG36UmHxwwxTT7TDpC
            source_type: api_record
            title: 中国历代人物传记资料库：王德純（CBDB 213939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213939&o=json
            external_identifier: CBDB:213939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hzu445ZxqHzX6JmkWi3uvZ
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純，明人物。萬曆二年進士，籍贯清苑，曾任縣丞、刑部主事、承德郎。（中国历代人物传记资料库 CBDB 213939）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_54z57Tq1rGPN_guY9lE97U
          claim_id: c_hzu445ZxqHzX6JmkWi3uvZ
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: CBDB:213939
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LGO4lHsKVahGWDD0_ITuwR
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Omtqt8u_gi0qgo0CSaB1PU
          claim_id: c_LGO4lHsKVahGWDD0_ITuwR
          source_id: s_3GogRG36UmHxwwxTT7TDpC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GDsYhHNBBkDcpWQEYco8Kg
        status: active
        display_name: 王開
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德純 | accepted |
| bio.summary | 王德純，明人物。萬曆二年進士，籍贯清苑，曾任縣丞、刑部主事、承德郎。（中国历代人物传记资料库 CBDB 213939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GDsYhHNBBkDcpWQEYco8Kg | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 213939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213939&o=json)
