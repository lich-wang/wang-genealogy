---
schema: wang-person/v1
id: p_MUqnRpzA6sMb9zAZwpwmSt
status: active
merged_into: null
display_name: 王燾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZtNWYK2cCCYGe8gMMv66e9
        subject_person_id: p_MUqnRpzA6sMb9zAZwpwmSt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mj5rwdCezpohK5WJGi8V29
          claim_id: c_ZtNWYK2cCCYGe8gMMv66e9
          source_id: s_pfDHs8i3BwsjDfo8rwT3H8
          stance: supports
          locator: CBDB:551536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551536）
          source: &a1
            id: s_pfDHs8i3BwsjDfo8rwT3H8
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 551536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551536&o=json
            external_identifier: CBDB:551536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iS2S4Th2cHgX2NNFpBsp6p
        subject_person_id: p_MUqnRpzA6sMb9zAZwpwmSt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1294年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MzTrLHBtamMMsnFf65XCYC
          claim_id: c_iS2S4Th2cHgX2NNFpBsp6p
          source_id: s_pfDHs8i3BwsjDfo8rwT3H8
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
        id: c_cWLG2i6ShvajcPnRHTPvbZ
        subject_person_id: p_MUqnRpzA6sMb9zAZwpwmSt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1339年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZtgqjjscm4iA7HsWFWf72
          claim_id: c_cWLG2i6ShvajcPnRHTPvbZ
          source_id: s_pfDHs8i3BwsjDfo8rwT3H8
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
        id: c_nQDsmuBmfgjK1uaSHuAjTH
        subject_person_id: p_MUqnRpzA6sMb9zAZwpwmSt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DPK8XmC3PZGW5M4t8z7Esn
          claim_id: c_nQDsmuBmfgjK1uaSHuAjTH
          source_id: s_pfDHs8i3BwsjDfo8rwT3H8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燾 | accepted |
| birth.date | 1294年 | accepted |
| death.date | 1339年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 551536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551536&o=json)
