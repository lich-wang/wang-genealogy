---
schema: wang-person/v1
id: p_BhEbkutZzdq81JKBUd4yf2
status: active
merged_into: null
display_name: 王溉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oeiqffTLpPfVdC59PCC3gd
        subject_person_id: p_BhEbkutZzdq81JKBUd4yf2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7q1MNTC9L75utZ2zcRFYN1
          claim_id: c_oeiqffTLpPfVdC59PCC3gd
          source_id: s_2ZVB2nu8bd9S2PtkkF3nbz
          stance: supports
          locator: CBDB:22084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22084）
          source: &a1
            id: s_2ZVB2nu8bd9S2PtkkF3nbz
            source_type: api_record
            title: 中国历代人物传记资料库：王溉（CBDB 22084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22084&o=json
            external_identifier: CBDB:22084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smEskX5KfSdAXjUideeHUS
        subject_person_id: p_BhEbkutZzdq81JKBUd4yf2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉，宋人物。籍贯石埭，入仕進士，曾任尚書省工部侍郎、朝請大夫、朝散大夫。（中国历代人物传记资料库 CBDB 22084）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FAG8e7r62qC92PJkrOd7Qr
          claim_id: c_smEskX5KfSdAXjUideeHUS
          source_id: s_2ZVB2nu8bd9S2PtkkF3nbz
          stance: supports
          locator: CBDB:22084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-4Iurf7FmqAFfKondTddVR
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BhEbkutZzdq81JKBUd4yf2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lct82yt_nVf5Zx8vRxYGwG
          claim_id: c_-4Iurf7FmqAFfKondTddVR
          source_id: s_F3J8PIGLP12ILnWEuAQR0Z
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22083）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_F3J8PIGLP12ILnWEuAQR0Z
            source_type: api_record
            title: 中国历代人物传记资料库：王溉（CBDB 22084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22084&o=json
            external_identifier: CBDB:22084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zGcbQEDDUm5Y71RMcWUTgh
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溉 | accepted |
| bio.summary | 王溉，宋人物。籍贯石埭，入仕進士，曾任尚書省工部侍郎、朝請大夫、朝散大夫。（中国历代人物传记资料库 CBDB 22084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zGcbQEDDUm5Y71RMcWUTgh | 王鎡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溉（CBDB 22084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22084&o=json)
