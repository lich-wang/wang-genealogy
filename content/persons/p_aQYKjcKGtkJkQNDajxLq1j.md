---
schema: wang-person/v1
id: p_aQYKjcKGtkJkQNDajxLq1j
status: active
merged_into: null
display_name: 王爾昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_etHHBAN6PnYdGwJFFBu2ZY
        subject_person_id: p_aQYKjcKGtkJkQNDajxLq1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EaJjd7yzNgURNJsPCeQDPC
          claim_id: c_etHHBAN6PnYdGwJFFBu2ZY
          source_id: s_eStQHyhDS8XhQDZ1kP4oFS
          stance: supports
          locator: CBDB:71494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71494）
          source: &a1
            id: s_eStQHyhDS8XhQDZ1kP4oFS
            source_type: api_record
            title: 中国历代人物传记资料库：王爾昌（CBDB 71494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71494&o=json
            external_identifier: CBDB:71494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XvMq7BdaNG4wtkaLPLa3Jq
        subject_person_id: p_aQYKjcKGtkJkQNDajxLq1j
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4FPEYLsVC7NvAZDxy1ABB
          claim_id: c_XvMq7BdaNG4wtkaLPLa3Jq
          source_id: s_eStQHyhDS8XhQDZ1kP4oFS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1qkML9m5pytBES3bY4sbpH
        subject_person_id: p_aQYKjcKGtkJkQNDajxLq1j
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_33D2C3Y8wfDBMQA7p7gGV7
          claim_id: c_1qkML9m5pytBES3bY4sbpH
          source_id: s_eStQHyhDS8XhQDZ1kP4oFS
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
        id: c_pnZY6iN8XFtBARRBGRQhTS
        subject_person_id: p_aQYKjcKGtkJkQNDajxLq1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾昌（1847年—1917年），中華民國人物。籍贯廬江。（中国历代人物传记资料库 CBDB 71494）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BXd1s_MX3BRfa_R4AA4vR7
          claim_id: c_pnZY6iN8XFtBARRBGRQhTS
          source_id: s_eStQHyhDS8XhQDZ1kP4oFS
          stance: supports
          locator: CBDB:71494
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

# 王爾昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾昌 | accepted |
| birth.date | 1847年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | 王爾昌（1847年—1917年），中華民國人物。籍贯廬江。（中国历代人物传记资料库 CBDB 71494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾昌（CBDB 71494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71494&o=json)
