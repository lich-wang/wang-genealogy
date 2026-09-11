---
schema: wang-person/v1
id: p_MDmN2bk745s6w4yNM6j31n
status: active
merged_into: null
display_name: 王登聯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rw4uDv3u6Yoe7FZ598B66A
        subject_person_id: p_MDmN2bk745s6w4yNM6j31n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登聯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hf4N8C15oK7EvKES6kVfFg
          claim_id: c_rw4uDv3u6Yoe7FZ598B66A
          source_id: s_ooiW4zTUA9jpeiKR6ZMrNy
          stance: supports
          locator: CBDB:57191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57191）
          source: &a1
            id: s_ooiW4zTUA9jpeiKR6ZMrNy
            source_type: api_record
            title: 中国历代人物传记资料库：王登聯（CBDB 57191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57191&o=json
            external_identifier: CBDB:57191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_97p163pSQYTD2DQDyV9HGy
        subject_person_id: p_MDmN2bk745s6w4yNM6j31n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rJFpWUoH4BnB54MQY3UFyR
          claim_id: c_97p163pSQYTD2DQDyV9HGy
          source_id: s_ooiW4zTUA9jpeiKR6ZMrNy
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
        id: c_FVRmuoFwkaTKCkGANgdDyN
        subject_person_id: p_MDmN2bk745s6w4yNM6j31n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登聯（卒于1666年），清人物。籍贯漢軍鑲紅旗，曾任巡撫、右參議、知州。（中国历代人物传记资料库 CBDB 57191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SH3_5xjcEjDXYHKtDRmbwy
          claim_id: c_FVRmuoFwkaTKCkGANgdDyN
          source_id: s_ooiW4zTUA9jpeiKR6ZMrNy
          stance: supports
          locator: CBDB:57191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v7xvPDtOmLdlC2zoxjdgQt
        subject_person_id: p_MDmN2bk745s6w4yNM6j31n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eARBbDBhMq7W7RfrV12UfF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0mAKWAwYUFMXAz3uih3Rex
          claim_id: c_v7xvPDtOmLdlC2zoxjdgQt
          source_id: s_ooiW4zTUA9jpeiKR6ZMrNy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），410：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eARBbDBhMq7W7RfrV12UfF
        status: active
        display_name: 王盛唐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王登聯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登聯 | accepted |
| death.date | 1666年 | accepted |
| bio.summary | 王登聯（卒于1666年），清人物。籍贯漢軍鑲紅旗，曾任巡撫、右參議、知州。（中国历代人物传记资料库 CBDB 57191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eARBbDBhMq7W7RfrV12UfF | 王盛唐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登聯（CBDB 57191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57191&o=json)
