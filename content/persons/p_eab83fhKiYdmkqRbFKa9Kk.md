---
schema: wang-person/v1
id: p_eab83fhKiYdmkqRbFKa9Kk
status: active
merged_into: null
display_name: 王應科
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66JrZrTMvEbkqSEHFL4o8q
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TGqux4Rj7n2pgpBCbJnSgh
          claim_id: c_66JrZrTMvEbkqSEHFL4o8q
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: CBDB:551388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551388）
          source: &a1
            id: s_VQuitjz7w9KkjRgmPHWUPa
            source_type: api_record
            title: 中国历代人物传记资料库：王應科（CBDB 551388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json
            external_identifier: CBDB:551388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WbLFtN3ZdddDNziCeJtK3t
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王應科，清人物。入仕貢生: 拔貢，曾任知縣、州判。（中国历代人物传记资料库 CBDB 551388）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s9gZq5LPVfh56iY9FmyqqA
          claim_id: c_WbLFtN3ZdddDNziCeJtK3t
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: CBDB:551388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wUSlO-7GMaXGY-uaeJrAQw
        subject_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ET-VQxnNJAemU0M_TCAoNF
          claim_id: c_wUSlO-7GMaXGY-uaeJrAQw
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sgFwSYG2RsvjHFjEuyLwo4
        status: active
        display_name: 王煜文
        merged_into_person_id: null
  children:
    - claim:
        id: c_-eu5FO68nkjmAgOChsao9D
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhfEnaE3WVDyx1yNffR1Ge
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2S9H4Fs8oF7JFjm1TlpSwe
          claim_id: c_-eu5FO68nkjmAgOChsao9D
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qhfEnaE3WVDyx1yNffR1Ge
        status: active
        display_name: 王佩葵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GstSo3gCnnN3f8JDYYCm_q
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIPnJtZ6lJcb0xGr_Kv5vR
          claim_id: c_GstSo3gCnnN3f8JDYYCm_q
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lag4sfewwEYeWDkfJpeQ26
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應科 | accepted |
| bio.summary | 王應科，清人物。入仕貢生: 拔貢，曾任知縣、州判。（中国历代人物传记资料库 CBDB 551388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sgFwSYG2RsvjHFjEuyLwo4 | 王煜文 | accepted |
| children | p_qhfEnaE3WVDyx1yNffR1Ge | 王佩葵 | accepted |
| ancestors | p_Lag4sfewwEYeWDkfJpeQ26 | 王廷槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應科（CBDB 551388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json)
